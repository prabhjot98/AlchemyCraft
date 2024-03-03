/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Setter, type JSXElement } from 'solid-js'
import { _addGold, _addItem, _completeQuest, _removeItem, usePlayer } from '../player/player'
import { QuestGiver, type Quest, isItemReward, isGeneratorReward, isGoldReward } from './quest'
import { _addMachine } from '../generators/generators'

const getQuestGiverImg = (questGiver: QuestGiver): string => {
  switch (questGiver) {
    case QuestGiver.BLACKSMITH:
      return '/assets/items/blacksmith__Anime_S3844297624_St40_G7 (Custom).png'
    case QuestGiver.DRUNK_OLD_MAN:
      return '/assets/items/drunk_happy_old_man__Anime_S2426875797_St40_G7 (Custom).png'
    case QuestGiver.FARMER:
      return '/assets/items/farmer__Anime_S3891257133_St40_G7 (Custom).png'
    case QuestGiver.MERCHANT:
      return '/assets/items/merchant__Anime_S3469690194_St40_G7 (Custom).png'
    case QuestGiver.MERICA:
      return '/assets/items/man_wearing_the_american_flag_as_a_bandana__Anime_S3665157605_St40_G7 (Custom).png'
  }
}

export const QuestCard = (props: { quest: Quest, setError: Setter<string> }): JSXElement => {
  const questGiverImg = getQuestGiverImg(props.quest.questGiver)
  const [inventory, setInventory] = usePlayer()

  const handleReward = (quest: Quest): void => {
    const addGold = _addGold(setInventory)
    const removeItem = _removeItem(setInventory)
    const addItem = _addItem(setInventory)
    const addMachine = _addMachine(setInventory)
    const completeQuest = _completeQuest(setInventory)

    console.log([...inventory.items.keys()].some((i) => i.type === quest.questItem.type))

    if (inventory.items.get(quest.questItem) === undefined) {
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
