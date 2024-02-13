import { For, type JSXElement } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ReagentDisplay } from './ReagentDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  return (
    <div class="flex flex-col p-2">
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${props.inventory.gold}`} />
      <div class="flex flex-wrap w-[26rem] gap-2">
        <For each={props.inventory.reagents} children={(item) => <ReagentDisplay reagent={item} />} />
      </div>
    </div>
  )
}
