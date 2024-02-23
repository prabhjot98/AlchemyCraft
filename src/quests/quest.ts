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

export interface Quest {
  questItem: Item
  questGiver: QuestGiver
  dialog: string
  preReqQuest: Quest | null
  rewardGold?: number
  rewardGenerator?: Generator
  rewardItem?: Item
}

export const BlacksmithQuest1: Quest = {
  questItem: goldOre,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me a gold ore and I'll give you a machine that can generate fire shard 1's",
  preReqQuest: null,
  rewardGenerator: { type: fireShard1 }
}

export const DrunkOldManQuest1: Quest = {
  questItem: alcohol,
  questGiver: QuestGiver.DRUNK_OLD_MAN,
  dialog: "Give me a alcohol and I'll give you a machine that can generate water shard 1's",
  preReqQuest: null,
  rewardGenerator: { type: waterShard1 }
}

export const FarmerQuest1: Quest = {
  questItem: mandrake,
  questGiver: QuestGiver.FARMER,
  dialog: "Give me a mandrake and I'll give you a machine that can generate earth shard 1's",
  preReqQuest: null,
  rewardGenerator: { type: earthShard1 }
}

export const MerchantQuest1: Quest = {
  questItem: glass,
  questGiver: QuestGiver.MERCHANT,
  dialog: "Give me a glass and I'll give you a machine that can generate air shard 1's",
  preReqQuest: null,
  rewardGenerator: { type: airShard1 }
}

export const MericaQuest1: Quest = {
  questItem: bomb,
  questGiver: QuestGiver.MERICA,
  dialog: "Give me a bomb and I'll give you 1000G",
  preReqQuest: null,
  rewardGold: 1000
}
export const QUESTS = [BlacksmithQuest1, DrunkOldManQuest1, FarmerQuest1, MerchantQuest1, MericaQuest1]
