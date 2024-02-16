import { type JSXElement } from 'solid-js'
import { type Item } from '../types/item'
import { ElementDisplay } from './ElementDisplay'

export const ReagentDisplay = (props: { reagent: Item, count: number }): JSXElement => {
  return (
    <div class="flex flex-col w-32 bg-gray-200 p-1 rounded-md">
      <p class="text-base font-semibold" textContent={props.reagent.type + ' x' + props.count} />
      <ElementDisplay
        fireElement={props.reagent.fireElement}
        waterElement={props.reagent.waterElement}
        earthElement={props.reagent.earthElement}
        airElement={props.reagent.airElement}
      />
    </div>
  )
}
