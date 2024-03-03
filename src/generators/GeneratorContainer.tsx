import { For, type JSXElement } from 'solid-js'
import { ShardGenerator } from './ShardGenerator'
import { type SetStoreFunction } from 'solid-js/store'
import { type Player } from '../player/player'

export const GeneratorContainer = (props: {
  inventory: Player
  setInventory: SetStoreFunction<Player>
}): JSXElement => {
  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Shard Generators" />
      <div class="flex flex-row flex-wrap gap-1 ">
        <For each={props.inventory.machines}>
          {(c) => <ShardGenerator setInventory={props.setInventory} shard={c.type} duration={1000 * 10} />}
        </For>
      </div>
    </div>
  )
}
