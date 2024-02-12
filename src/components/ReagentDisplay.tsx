import { type JSXElement } from 'solid-js'
import { type Reagent } from '../types/reagents'
import { ElementDisplay } from './ElementDisplay'

export const ReagentDisplay = (props: { reagent: Reagent }): JSXElement => {
  return (
    <div class="flex flex-col">
      <p class="text-xl font-semibold" textContent={props.reagent.type} />
      <ElementDisplay
        fireElement={props.reagent.fireElement}
        waterElement={props.reagent.waterElement}
        earthElement={props.reagent.earthElement}
        airElement={props.reagent.airElement}
      />
    </div>
  )
}
