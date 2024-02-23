import { type JSXElement } from 'solid-js'
import { type Item } from '../items/items'
import { ElementDisplay } from '../components/ElementDisplay'

export const ItemCard = (props: { item: Item }): JSXElement => {
  return (
    <div class="flex flex-col w-32 bg-gray-300 p-2 rounded-md justify-center">
      <p class="text-xl" textContent={props.item.type} />
      <ElementDisplay
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
    </div>
  )
}