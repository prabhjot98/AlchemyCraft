import { For, type JSXElement } from 'solid-js'
import { ElementDisplay } from '../items/ElementDisplay'
import { ItemImg } from '../items/ItemIcon'
import { findItem, type ItemName } from '../player/items'
import { addToCircle, usePlayer } from '../player/player'

const BackpackItem = (props: { itemName: ItemName }) => {
  const item = findItem(props.itemName)

  return (
    <div class="flex flex-col rounded p-0.5 bg-gray-50 items-center justify-center">
      <ItemImg
        itemName={props.itemName}
        onClick={() => {
          addToCircle(props.itemName)
        }}
      />
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
    <div class="bg-white/50 flex flex-initial content-start justify-center flex-wrap gap-x-4 gap-y-2 size-96 overflow-y-auto rounded p-4 drop-shadow-2xl">
      <For each={player.unlockedItems}>
        {(i) => {
          return <BackpackItem itemName={i} />
        }}
      </For>
    </div>
  )
}
