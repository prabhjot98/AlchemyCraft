import { For, type JSXElement } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ReagentDisplay } from './ReagentDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  return (
    <div>
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${props.inventory.gold}`} />
      <For each={props.inventory.reagents} children={(item) => <ReagentDisplay reagent={item} />} />
    </div>
  )
}
