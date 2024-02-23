import { type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../inventory/inventory'
import { airShard1, earthShard1, fireShard1, waterShard1 } from '../items/items'
import { ShardRock } from './ShardRock'

export const ShardRockDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 innerText="Shard Rocks" />
      <div class="flex flex-wrap gap-2">
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shard={fireShard1} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shard={waterShard1} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shard={earthShard1} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shard={airShard1} />
      </div>
    </div>
  )
}
