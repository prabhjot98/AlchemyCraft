import { type JSXElement } from 'solid-js'
import { type Item } from '../types/items'
import { ElementDisplay } from './ElementDisplay'

export const ItemDisplay = (props: { item: Item, count: number, onClick?: () => void }): JSXElement => {
  return (
    <div class="flex flex-col w-32 h-24 bg-gray-100 p-1 rounded-md justify-center" onClick={props.onClick}>
      <p class="text-lg font-semibold mx-auto" textContent={props.item.type} />
      <ElementDisplay
        class="mx-auto"
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
      <p class="text-base font-semibold mr-2 ml-auto" textContent={'x ' + props.count} />
    </div>
  )
}
