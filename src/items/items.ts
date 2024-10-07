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

export const fireShard: Item = {
  name: 'small fire shard',
  imgSrc: '/assets/shard crystals/red_crystal.png',
  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard: Item = {
  name: 'small water shard',
  imgSrc: '/assets/shard crystals/blue_crystal.png',
  fireElement: 0,
  waterElement: 1,
  earthElement: 0,
  airElement: 0
}

export const earthShard: Item = {
  name: 'small earth shard',
  imgSrc: '/assets/shard crystals/brown_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const airShard: Item = {
  name: 'small air shard',
  imgSrc: '/assets/shard crystals/white_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 1
}

export const philosphersStone: Item = {
  name: "philospher's stone",
  imgSrc: '/assets/shard crystals/white_crystal.png',
  fireElement: 3,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const ITEMS = [philosphersStone, fireShard, airShard, earthShard, waterShard]

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

export const isValidCraft = (item1: ItemName, item2: ItemName, item3: ItemName, craft: ItemName): boolean => {
  const i1 = findItem(item1)
  const i2 = findItem(item2)
  const i3 = findItem(item3)
  const result = findItem(craft)

  const totalFire = calcTotalFireElement(i1, i2, i3)
  const totalWater = calcTotalWaterElement(i1, i2, i3)
  const totalEarth = calcTotalEarthElement(i1, i2, i3)
  const totalAir = calcTotalAirElement(i1, i2, i3)

  if (
    totalFire >= result.fireElement &&
    totalWater >= result.waterElement &&
    totalEarth >= result.earthElement &&
    totalAir >= result.airElement
  ) {
    return true
  }

  return false
}
