export const randomItemFrom = (items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export interface Item {
  name: ItemName
  imgSrc: string
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
}

export type ItemName =
  | 'small fire shard'
  | 'small water shard'
  | 'small earth shard'
  | 'small air shard'
  | "philospher's stone"

export const smallFireShard: Item = {
  name: 'small fire shard',
  imgSrc: '/assets/shard crystals/red_crystal.png',

  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const smallWaterShard: Item = {
  name: 'small water shard',
  imgSrc: '/assets/shard crystals/blue_crystal.png',
  fireElement: 0,
  waterElement: 1,
  earthElement: 0,
  airElement: 0
}

export const smallEarthShard: Item = {
  name: 'small earth shard',
  imgSrc: '/assets/shard crystals/brown_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const smallAirShard: Item = {
  name: 'small air shard',
  imgSrc: '/assets/shard crystals/white_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 1
}

export const ITEMS = [smallFireShard, smallAirShard, smallEarthShard, smallWaterShard]

export function findItem (itemName: ItemName): Item {
  const foundItem = ITEMS.find((i) => i.name === itemName)
  if (foundItem === undefined) {
    throw new Error(`Item not found ${itemName}`)
  }
  return foundItem
}

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
