import { createSignal, For, type JSXElement } from 'solid-js'
import { usePlayer } from '../player/player'
import { QUESTS, type Quest } from './quest'
import { QuestCard } from './QuestCard'

export const QuestDisplay = (): JSXElement => {
  const [error, setError] = createSignal<string>('')
  const [inventory] = usePlayer()

  const uncompletedQuests = (): Quest[] => {
    return QUESTS.filter((quest) => {
      const isUncomplete = !inventory.completedQuests.some(
        (completedQuest) => JSON.stringify(quest) === JSON.stringify(completedQuest)
      )

      const isPrereqComplete =
        inventory.completedQuests.some(
          (completedQuest) => JSON.stringify(completedQuest) === JSON.stringify(quest.preReqQuest)
        ) || quest.preReqQuest === null

      return isUncomplete && isPrereqComplete
    })
  }

  return (
    <div class="flex flex-col bg-blue-200 rounded-lg p-2 gap-2 h-[500px]">
      <h1 textContent="Quests" />
      <div class="flex flex-col gap-1">
        <For each={uncompletedQuests()}>{(quest) => <QuestCard setError={setError} quest={quest} />}</For>
      </div>
      <h4 innerText={error()} />
    </div>
  )
}
