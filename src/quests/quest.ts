import { fireShard1, waterShard1, type Item, earthShard1, airShard1 } from '../items/items'
import { type Generator } from '../generators/generators'
import { alcohol, bomb, glass, goldOre, mandrake } from '../recipes/recipes'

export enum QuestGiver {
  BLACKSMITH,
  DRUNK_OLD_MAN,
  FARMER,
  MERCHANT,
  MERICA,
}

export type Reward =
  | {
    gold: number
  }
  | { generator: Generator }
  | { item: Item }

export const isGoldReward = (reward: any): reward is { gold: number } => reward?.gold !== undefined

export const isGeneratorReward = (reward: any): reward is { generator: Generator } => reward?.generator !== undefined

export const isItemReward = (reward: any): reward is { item: Item } => reward?.item !== undefined

export interface Quest {
  questItem: Item
  questGiver: QuestGiver
  dialog: string
  preReqQuest: Quest | null
  rewards: Reward[]
}

export const BlacksmithQuest1: Quest = {
  questItem: goldOre,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me a gold ore and I'll give you a machine that can generate fire shard 1's",
  preReqQuest: null,
  rewards: [{ generator: { type: fireShard1 } }]
}

export const DrunkOldManQuest1: Quest = {
  questItem: alcohol,
  questGiver: QuestGiver.DRUNK_OLD_MAN,
  dialog: "Give me a alcohol and I'll give you a machine that can generate water shard 1's",
  preReqQuest: null,
  rewards: [{ generator: { type: waterShard1 } }]
}

export const FarmerQuest1: Quest = {
  questItem: mandrake,
  questGiver: QuestGiver.FARMER,
  dialog: "Give me a mandrake and I'll give you a machine that can generate earth shard 1's",
  preReqQuest: null,
  rewards: [{ generator: { type: earthShard1 } }]
}

export const MerchantQuest1: Quest = {
  questItem: glass,
  questGiver: QuestGiver.MERCHANT,
  dialog: "Give me a glass and I'll give you a machine that can generate air shard 1's",
  preReqQuest: null,
  rewards: [{ generator: { type: airShard1 } }]
}

export const MericaQuest1: Quest = {
  questItem: bomb,
  questGiver: QuestGiver.MERICA,
  dialog: "Give me a bomb and I'll give you 1000G",
  preReqQuest: null,
  rewards: [{ gold: 1000 }]
}

export const QUESTS = [BlacksmithQuest1, DrunkOldManQuest1, FarmerQuest1, MerchantQuest1, MericaQuest1]
