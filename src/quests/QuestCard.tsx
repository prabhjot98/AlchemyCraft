/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Setter, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addGold, _addItem, _completeQuest, _removeItem, type Inventory } from '../inventory/inventory'
import { QuestGiver, type Quest, isItemReward, isGeneratorReward, isGoldReward } from './quest'
import { _addMachine } from '../generators/generators'

const getQuestGiverImg = (questGiver: QuestGiver): string => {
  switch (questGiver) {
    case QuestGiver.BLACKSMITH:
      return '../../public/assets/items/blacksmith__Anime_S3844297624_St40_G7 (Custom).png'
    case QuestGiver.DRUNK_OLD_MAN:
      return '../../public/assets/items/drunk_happy_old_man__Anime_S2426875797_St40_G7 (Custom).png'
    case QuestGiver.FARMER:
      return '../../public/assets/items/farmer__Anime_S3891257133_St40_G7 (Custom).png'
    case QuestGiver.MERCHANT:
      return '../../public/assets/items/merchant__Anime_S3469690194_St40_G7 (Custom).png'
    case QuestGiver.MERICA:
      return '../../public/assets/items/man_wearing_the_american_flag_as_a_bandana__Anime_S3665157605_St40_G7 (Custom).png'
  }
}

export const QuestCard = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
  quest: Quest
  setError: Setter<string>
}): JSXElement => {
  const questGiverImg = getQuestGiverImg(props.quest.questGiver)

  const handleReward = (quest: Quest): void => {
    const addGold = _addGold(props.setInventory)
    const removeItem = _removeItem(props.setInventory)
    const addItem = _addItem(props.setInventory)
    const addMachine = _addMachine(props.setInventory)
    const completeQuest = _completeQuest(props.setInventory)

    if (props.inventory.items.get(quest.questItem) === undefined) {
      props.setError(`You don't have a ${quest.questItem.type} in your inventory`)
      return
    }
    removeItem(quest.questItem)
    quest.rewards.forEach((reward) => {
      if (isItemReward(reward)) {
        addItem(reward.item)
      }
      if (isGeneratorReward(reward)) {
        addMachine(reward.generator)
      }
      if (isGoldReward(reward)) {
        addGold(reward.gold)
      }
    })
    completeQuest(quest)
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
