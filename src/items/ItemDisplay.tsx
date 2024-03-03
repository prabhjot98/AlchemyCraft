import { Show, type JSXElement } from 'solid-js'
import { type Item } from './items'
import { ElementDisplay } from './ElementDisplay'

export const ItemDisplay = (props: { item: Item, count?: number, onClick?: () => void }): JSXElement => {
  return (
    <div class="flex flex-row bg-gray-100 rounded-md justify-center px-2 m-auto w-96" onClick={props.onClick}>
      <h4 class="font-semibold w-max text-xl" textContent={props.item.type} />
      <ElementDisplay
        class="ml-auto mr-2"
        fireElement={props.item.fireElement}
        waterElement={props.item.waterElement}
        earthElement={props.item.earthElement}
        airElement={props.item.airElement}
      />
      <Show when={props.count !== undefined}>
        <h4 class="font-semibold mr-1 " textContent={'x ' + props.count} />
      </Show>
    </div>
  )
}
