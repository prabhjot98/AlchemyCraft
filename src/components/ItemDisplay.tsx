import { type JSXElement } from 'solid-js'
import { type Item } from '../types/item'
import { ElementDisplay } from './ElementDisplay'

export const ItemDisplay = (props: { item: Item, count: number, onClick?: () => void }): JSXElement => {
  return (
    <div class="flex flex-col w-32 h-24 bg-gray-100 p-1 rounded-md" onClick={props.onClick}>
      <p class="text-base font-semibold" textContent={props.item.type + ' x' + props.count} />
      <ElementDisplay
        class="mb-0 mt-auto mx-auto"
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
    </div>
  )
}
