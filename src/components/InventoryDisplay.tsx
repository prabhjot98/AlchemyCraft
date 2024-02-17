import { For, type JSXElement } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ItemDisplay } from './ItemDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  return (
    <div class="flex flex-col p-2">
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${props.inventory.gold}`} />
      <div class="flex flex-wrap w-[26rem] gap-2">
        <For
          each={[...props.inventory.items.keys()]}
          children={(item) => {
            return <ItemDisplay item={item} count={props.inventory.items.get(item) ?? 0} />
          }}
        />
      </div>
    </div>
  )
}
