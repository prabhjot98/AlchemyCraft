/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Setter, type JSXElement } from 'solid-js'
import { _completeQuest, usePlayer } from '../player/player'
import { QuestGiver, type Quest } from './quest'

const getQuestGiverImg = (questGiver: QuestGiver): string => {
  switch (questGiver) {
    case QuestGiver.BLACKSMITH:
      return '/assets/npcs/blacksmith.png'
    case QuestGiver.DRUNK_OLD_MAN:
      return '/assets/npcs/drunk_old_man.png'
    case QuestGiver.FARMER:
      return '/assets/npcs/farmer.png'
    case QuestGiver.MERCHANT:
      return '/assets/npcs/merchant.png'
    case QuestGiver.MERICA:
      return '/assets/npcs/merica.png'
  }
}

export const QuestCard = (props: { quest: Quest, setError: Setter<string> }): JSXElement => {
  const questGiverImg = getQuestGiverImg(props.quest.questGiver)
  const [inventory, setInventory] = usePlayer()

  const handleReward = (quest: Quest): void => {
    if (inventory.items.get(quest.questItem) === undefined) {
      props.setError(`You don't have a ${quest.questItem.type} in your inventory`)
      return
    }
    _completeQuest(setInventory)(quest)
    props.setError('Thanks for the item!')
  }

  return (
    <div class="flex flex-wrap gap-1">
      <div
        class="flex flex-row gap-2 align-middle"
        onClick={() => {
          handleReward(props.quest)
        }}
      >
        <img src={questGiverImg} class="min-h-32 min-w-32 rounded-xl" />
        <button>{props.quest.dialog}</button>
      </div>
    </div>
  )
}
