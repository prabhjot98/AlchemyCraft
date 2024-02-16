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

export const fireShard1: Item = {
  type: 'fire shard 1',
  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard1: Item = {
  type: 'water shard 1',
  fireElement: 0,
  waterElement: 1,
  earthElement: 0,
  airElement: 0
}

export const earthShard1: Item = {
  type: 'earth shard 1',
  fireElement: 0,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const airShard1: Item = {
  type: 'air shard 1',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 1
}

export const SHARDS = [fireShard1, waterShard1, earthShard1, airShard1]

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
