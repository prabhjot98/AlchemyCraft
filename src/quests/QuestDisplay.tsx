import { createSignal, For, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../inventory/inventory'
import { QUESTS } from './quest'
import { QuestCard } from './QuestCard'

export const QuestDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  const [error, setError] = createSignal<string>('')

  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Quests" />
      <div class="flex flex-wrap gap-1">
        <For
          each={QUESTS.filter(
            (q) => !props.inventory.completedQuests.some((c) => JSON.stringify(q) === JSON.stringify(c))
          )}
        >
          {(quest) => (
            <QuestCard
              setError={setError}
              inventory={props.inventory}
              setInventory={props.setInventory}
              quest={quest}
            />
          )}
        </For>
      </div>
      <h4 innerText={error()} />
    </div>
  )
}
