import { For, type JSXElement } from 'solid-js'
import { type Inventory } from '../contexts/Inventory'
import { ReagentDisplay } from './ReagentDisplay'

export const InventoryDisplay = (inventory: Inventory): JSXElement => {
  return (
    <div>
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${inventory.gold}`} />
      <For each={inventory.reagents} children={(item) => <p children={ReagentDisplay(item)} />} />
    </div>
  )
}
