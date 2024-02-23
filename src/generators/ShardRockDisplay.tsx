import { type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../inventory/inventory'
import { ShardRock, ShardRockType } from './ShardRock'

export const ShardRockDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 innerText="Shard Rocks" />
      <div class="flex flex-wrap gap-2">
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shardRockType={ShardRockType.FIRE} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shardRockType={ShardRockType.WATER} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shardRockType={ShardRockType.EARTH} />
        <ShardRock inventory={props.inventory} setInventory={props.setInventory} shardRockType={ShardRockType.AIR} />
      </div>
    </div>
  )
}
