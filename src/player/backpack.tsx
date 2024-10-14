import { createDraggable } from '@thisbeyond/solid-dnd'
import { For, type JSXElement } from 'solid-js'
import { ItemImg } from '../items/ItemIcon'
import { findItem, type ItemName } from '../items/items'
import { usePlayer } from './player'
import { ElementDisplay } from '../items/ElementDisplay'

const BackpackItem = (props: { itemName: ItemName }) => {
  const [player] = usePlayer()
  const quantity = () => player.items.get(props.itemName)
  const item = findItem(props.itemName)

  return (
    <div>
      <div class="size-16 rounded relative">
        <ItemImg itemName={props.itemName} />
        <div class="absolute bg-white rounded size-6 text-center bottom-1 right-1">{quantity()}</div>
      </div>
      <ElementDisplay
        fireElement={item.fireElement}
        waterElement={item.waterElement}
        earthElement={item.earthElement}
        airElement={item.airElement}
      />
    </div>
  )
}

export const Backpack = (): JSXElement => {
  const [player] = usePlayer()

  return (
    <div class="bg-white/50 flex flex-initial content-start flex-wrap gap-x-4 gap-y-2 w-96 rounded h-[450px] p-4">
      <For each={[...player.items.keys()]}>
        {(i) => {
          const draggable = createDraggable(i)
          return (
            <div class="flex rounded p-1 bg-gray-300 size-fit" use:draggable={draggable}>
              <BackpackItem itemName={i} />
            </div>
          )
        }}
      </For>
    </div>
  )
}
