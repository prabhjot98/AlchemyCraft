import { createSignal, For, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { type Inventory } from '../inventory/inventory'
import { type Quest, QUESTS } from './quest'
import { QuestCard } from './QuestCard'

export const QuestDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const uncompletedQuests = (): Quest[] => {
    return QUESTS.filter((quest) => {
      const isUncomplete = !props.inventory.completedQuests.some(
        (completedQuest) => JSON.stringify(quest) === JSON.stringify(completedQuest)
      )

      const isPrereqComplete =
        props.inventory.completedQuests.some(
          (completedQuest) => JSON.stringify(completedQuest) === JSON.stringify(quest.preReqQuest)
        ) || quest.preReqQuest === null

      return isUncomplete && isPrereqComplete
    })
  }

  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Quests" />
      <div class="flex flex-wrap gap-1">
        <For each={uncompletedQuests()}>
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
