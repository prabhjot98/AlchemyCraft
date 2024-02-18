import { For, type JSXElement } from 'solid-js'
import { ShardCompressor } from './ShardCompressor'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../types/inventory'

export const CompressorContainer = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Shard Compressors" />
      <div class="flex flex-row flex-wrap gap-1 ">
        <For each={props.inventory.machines}>
          {(c) => <ShardCompressor setInventory={props.setInventory} shard={c.type} />}
        </For>
      </div>
    </div>
  )
}
