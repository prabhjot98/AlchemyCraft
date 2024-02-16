import { For, createSignal, type JSXElement, createEffect } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { ReagentDisplay } from './ReagentDisplay'

export const InventoryDisplay = (props: { inventory: Inventory }): JSXElement => {
  const [keys, setKeys] = createSignal<string[]>(Object.keys(props.inventory.reagents))
  createEffect(() => {
    setKeys(Object.keys(props.inventory.reagents))
  })

  return (
    <div class="flex flex-col p-2">
      <p class="text-4xl font-bold" textContent="Inventory" />
      <p class="text-xl " textContent={`Gold: ${props.inventory.gold}`} />
      <div class="flex flex-wrap w-[26rem] gap-2">
        <For
          each={keys()}
          children={(item) => {
            return <ReagentDisplay reagent={JSON.parse(item)} count={props.inventory.reagents[item]} />
          }}
        />
      </div>
    </div>
  )
}
