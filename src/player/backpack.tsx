import { For, type JSXElement } from 'solid-js'
import { usePlayer } from './player'
import { ItemIcon } from '../items/ItemIcon'
import { createDraggable } from '@thisbeyond/solid-dnd'

export const Backpack = (): JSXElement => {
  const [player] = usePlayer()

  return (
    <div class="bg-white/50 mx-auto gap-1 rounded w-96 h-80 p-4 mb-4 flex flex-wrap">
      <For each={[...player.items.keys()]}>
        {(i) => {
          const draggable = createDraggable(i)
          return (
            <div use:draggable={draggable}>
              <ItemIcon itemName={i} />
            </div>
          )
        }}
      </For>
    </div>
  )
}
