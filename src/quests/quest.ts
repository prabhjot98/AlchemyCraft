import { smallFireShard, smallWaterShard, type Item, smallEarthShard, smallAirShard } from '../items/items'
import { type Generator } from '../generators/generators'
import { alcohol, ash, bomb, clay, coal, glass, mandrake } from '../recipes/recipes'
import { cabbageSeed, carrotSeed } from '../items/seeds'

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
  questItem: coal,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me one coal and I'll give you a machine that can generate fire shard 1's",
  preReqQuest: null,
  rewards: [{ generator: { type: smallFireShard } }]
}

export const BlacksmithQuest2: Quest = {
  questItem: alcohol,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me one alcohol and I'll give you a machine that can generate water shard 1's",
  preReqQuest: BlacksmithQuest1,
  rewards: [{ generator: { type: smallWaterShard } }]
}

export const BlacksmithQuest3: Quest = {
  questItem: mandrake,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me one mandrake and I'll give you a machine that can generate earth shard 1's",
  preReqQuest: BlacksmithQuest2,
  rewards: [{ generator: { type: smallEarthShard } }]
}

export const BlacksmithQuest4: Quest = {
  questItem: glass,
  questGiver: QuestGiver.BLACKSMITH,
  dialog: "Give me one glass and I'll give you a machine that can generate air shard 1's",
  preReqQuest: BlacksmithQuest3,
  rewards: [{ generator: { type: smallAirShard } }]
}

export const FarmerQuest1: Quest = {
  questItem: ash,
  questGiver: QuestGiver.FARMER,
  dialog: "Give me one ash and I'll give you a cabbage seed",
  preReqQuest: null,
  rewards: [{ item: cabbageSeed }]
}

export const FarmerQuest2: Quest = {
  questItem: clay,
  questGiver: QuestGiver.FARMER,
  dialog: "Give me one clay and I'll give you a carrot seed",
  preReqQuest: FarmerQuest1,
  rewards: [{ item: carrotSeed }]
}

export const MericaQuest1: Quest = {
  questItem: bomb,
  questGiver: QuestGiver.MERICA,
  dialog: "Give me a bomb and I'll give you 1000G",
  preReqQuest: null,
  rewards: [{ gold: 1000 }]
}

export const QUESTS = [
  BlacksmithQuest1,
  BlacksmithQuest2,
  BlacksmithQuest3,
  BlacksmithQuest4,
  FarmerQuest1,
  FarmerQuest2,
  MericaQuest1
]
