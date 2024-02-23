import { For, type JSXElement } from 'solid-js'
import { ShardGenerator } from './ShardGenerator'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../inventory/inventory'

export const GeneratorContainer = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Shard Generators" />
      <div class="flex flex-row flex-wrap gap-1 ">
        <For each={props.inventory.machines}>
          {(c) => <ShardGenerator setInventory={props.setInventory} shard={c.type} />}
        </For>
      </div>
    </div>
  )
}
