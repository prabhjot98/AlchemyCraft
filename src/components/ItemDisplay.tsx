import { type JSXElement } from 'solid-js'
import { type Item } from '../types/item'
import { ElementDisplay } from './ElementDisplay'

export const ItemDisplay = (props: { item: Item, count: number }): JSXElement => {
  return (
    <div class="flex flex-col w-32 bg-gray-200 p-1 rounded-md">
      <p class="text-base font-semibold" textContent={props.item.type + ' x' + props.count} />
      <ElementDisplay
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
    </div>
  )
}
