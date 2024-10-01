import { For, type JSXElement } from 'solid-js'
import { usePlayer } from './player'
import { ItemIcon } from '../items/ItemIcon'
import { createDraggable } from '@thisbeyond/solid-dnd'

export const Backpack = (): JSXElement => {
  const [player] = usePlayer()

  return (
    <div class="bg-white/50 mx-auto grid grid-cols-5 grid-rows-4 gap-x-2 min-w-96 rounded min-h-80 p-4 mb-4">
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
