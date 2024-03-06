import { smallAirShard, smallEarthShard, smallFireShard, smallWaterShard } from './tier0'
import { tierOneItems } from './tier1'

export const randomItemFrom = (items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export interface Item {
  type: string
  tier: number
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
}

export const SHARDS = [smallFireShard, smallWaterShard, smallEarthShard, smallAirShard]
export const STARTER_ITEMS = [...tierOneItems, ...SHARDS]

export const calcTotalFireElement = (...items: Array<Item | null>): number => {
  let total = 0
  items.forEach((r) => (total += r?.fireElement ?? 0))
  return total
}

export const calcTotalWaterElement = (...items: Array<Item | null>): number => {
  let total = 0
  items.forEach((r) => (total += r?.waterElement ?? 0))
  return total
}

export const calcTotalEarthElement = (...items: Array<Item | null>): number => {
  let total = 0
  items.forEach((r) => (total += r?.earthElement ?? 0))
  return total
}

export const calcTotalAirElement = (...items: Array<Item | null>): number => {
  let total = 0
  items.forEach((r) => (total += r?.airElement ?? 0))
  return total
}
