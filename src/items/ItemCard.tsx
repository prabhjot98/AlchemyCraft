import { type JSXElement } from 'solid-js'
import { type Item } from './items'
import { ElementDisplay } from './ElementDisplay'

export const ItemCard = (props: { item: Item, onClick?: () => void, selected?: boolean }): JSXElement => {
  return (
    <div
      class="flex flex-col w-32 h-20 bg-gray-300 p-2 rounded-md justify-center"
      classList={{ 'bg-green-300': props.selected === true }}
      onClick={props.onClick}
    >
      <h4 textContent={props.item.type} />
      <ElementDisplay
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
    </div>
  )
}
