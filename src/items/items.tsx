export const randomItemFrom = (items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export interface Item {
  type: string
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
}

export const smallFireShard: Item = {
  type: 'small fire shard',
  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const smallWaterShard: Item = {
  type: 'small water shard',
  fireElement: 0,
  waterElement: 1,
  earthElement: 0,
  airElement: 0
}

export const smallEarthShard: Item = {
  type: 'small earth shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const smallAirShard: Item = {
  type: 'small air shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 1
}

export const SHARDS = [smallFireShard, smallWaterShard, smallEarthShard, smallAirShard]

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
