import { For, type JSXElement } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ItemDisplay } from './ItemDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  const numberOfUniqueItems = (): number => [...props.inventory.items.keys()].length
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
        <For
          each={[...Array(props.inventory.maxSize - numberOfUniqueItems())]}
          children={() => {
            return <div class="flex flex-col w-32 h-24 bg-gray-100 p-1 rounded-md justify-center" />
          }}
        />
      </div>
    </div>
  )
}
