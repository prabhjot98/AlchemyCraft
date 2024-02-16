import { For, createSignal, type JSXElement, createEffect } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ItemDisplay } from './ItemDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  const [keys, setKeys] = createSignal<string[]>(Object.keys(props.inventory.items))
  createEffect(() => {
    setKeys(Object.keys(props.inventory.items))
  })

  return (
    <div class="flex flex-col p-2">
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${props.inventory.gold}`} />
      <div class="flex flex-wrap w-[26rem] gap-2">
        <For
          each={keys()}
          children={(item) => {
            return <ItemDisplay item={JSON.parse(item)} count={props.inventory.items[item]} />
          }}
        />
      </div>
    </div>
  )
}
