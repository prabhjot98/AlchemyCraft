import { type JSXElement } from 'solid-js'
import { type Item } from '../items/items'
import { ElementDisplay } from '../components/ElementDisplay'

export const ItemDisplay = (props: { item: Item, count: number, onClick?: () => void }): JSXElement => {
  return (
    <div class="flex flex-col w-32 h-28 bg-gray-100 p-0.5 rounded-md justify-center " onClick={props.onClick}>
      <p class="font-semibold" textContent={props.item.type} />
      <ElementDisplay
        class="mx-auto"
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
      <p class="font-semibold mr-2 ml-auto" textContent={'x ' + props.count} />
    </div>
  )
}
