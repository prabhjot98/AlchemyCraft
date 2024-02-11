import { type JSXElement } from 'solid-js'
import { type Reagent } from '../types/reagents'
import { ElementDisplay } from './ElementDisplay'

export const ReagentDisplay = (reagent: Reagent): JSXElement => {
  return (
    <div class="flex flex-col">
      <p class="text-xl font-semibold" textContent={reagent.type} />
      {ElementDisplay(reagent.fireElement, reagent.waterElement, reagent.earthElement, reagent.airElement)}
    </div>
  )
}
