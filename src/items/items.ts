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
  | 'fire shard'
  | 'water shard'
  | 'earth shard'
  | 'air shard'
  | 'sulfur'
  | 'moss'
  | 'pebble'
  | 'aether feather'
  | 'bomb'
  | 'serpent tear'
  | 'boulder'
  | 'sky essence'
  | "philosopher's stone"
  | 'elemental seed'
  | 'phoenix feather'
  | 'steam'
  | 'geyser'
  | 'wood log'
  | 'dirt'
  | 'alcohol'
  | 'elemental matrix'
  | 'world tree'
  | 'prima materia'
  | 'soul'
  | 'mandrake'
  | 'obsidian'
  | 'spirit water'
  | 'ethereal canvas'

export const fireShard: Item = {
  name: 'fire shard',
  imgSrc: '/assets/shard crystals/red_crystal.png',
  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard: Item = {
  name: 'water shard',
  imgSrc: '/assets/shard crystals/blue_crystal.png',
  fireElement: 0,
  waterElement: 1,
  earthElement: 0,
  airElement: 0
}

export const earthShard: Item = {
  name: 'earth shard',
  imgSrc: '/assets/shard crystals/brown_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const airShard: Item = {
  name: 'air shard',
  imgSrc: '/assets/shard crystals/white_crystal.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 1
}

const sulfur: Item = {
  name: 'sulfur',
  imgSrc: '/assets/items/sulfur.png',
  fireElement: 4,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

const moss: Item = {
  name: 'moss',
  imgSrc: '/assets/items/moss.png',
  fireElement: 0,
  waterElement: 4,
  earthElement: 0,
  airElement: 0
}

const pebble: Item = {
  name: 'pebble',
  imgSrc: '/assets/items/pebble.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 4,
  airElement: 0
}

const aetherFeather: Item = {
  name: 'aether feather',
  imgSrc: '/assets/items/aether feather.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 4
}

const dragonsTongue: Item = {
  name: 'bomb',
  imgSrc: '/assets/items/bomb.png',
  fireElement: 7,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

const serpentTear: Item = {
  name: 'serpent tear',
  imgSrc: '/assets/items/serpent tear.png',
  fireElement: 0,
  waterElement: 7,
  earthElement: 0,
  airElement: 0
}

const boulder: Item = {
  name: 'boulder',
  imgSrc: '/assets/items/boulder.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 7,
  airElement: 0
}

const skyEssence: Item = {
  name: 'sky essence',
  imgSrc: '/assets/items/sky essence.png',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 7
}

const elementalSeed: Item = {
  name: 'elemental seed',
  imgSrc: '/assets/items/elemental seed.png',
  fireElement: 1,
  waterElement: 1,
  earthElement: 1,
  airElement: 1
}

const alcohol: Item = {
  name: 'alcohol',
  imgSrc: '/assets/items/alcohol.png',
  fireElement: 1,
  waterElement: 3,
  earthElement: 0,
  airElement: 0
}

const dirt: Item = {
  name: 'dirt',
  imgSrc: '/assets/items/dirt.png',
  fireElement: 0,
  waterElement: 1,
  earthElement: 2,
  airElement: 1
}

const mandrake: Item = {
  name: 'mandrake',
  imgSrc: '/assets/items/mandrake.png',
  fireElement: 0,
  waterElement: 3,
  earthElement: 4,
  airElement: 0
}

const phoenixFeather: Item = {
  name: 'phoenix feather',
  imgSrc: '/assets/items/phoenix feather.png',
  fireElement: 3,
  waterElement: 0,
  earthElement: 0,
  airElement: 4
}

const steam: Item = {
  name: 'steam',
  imgSrc: '/assets/items/steam.png',
  fireElement: 0,
  waterElement: 4,
  earthElement: 0,
  airElement: 3
}

const geyser: Item = {
  name: 'geyser',
  imgSrc: '/assets/items/geyser.png',
  fireElement: 1,
  waterElement: 1,
  earthElement: 4,
  airElement: 1
}

const woodLog: Item = {
  name: 'wood log',
  imgSrc: '/assets/items/wood log.png',
  fireElement: 1,
  waterElement: 2,
  earthElement: 2,
  airElement: 2
}

const worldTree: Item = {
  name: 'world tree',
  imgSrc: '/assets/items/world tree.png',
  fireElement: 0,
  waterElement: 3,
  earthElement: 4,
  airElement: 3
}

const obsidian: Item = {
  name: 'obsidian',
  imgSrc: '/assets/items/obsidian.png',
  fireElement: 4,
  waterElement: 4,
  earthElement: 5,
  airElement: 0
}

const soul: Item = {
  name: 'soul',
  imgSrc: '/assets/items/soul.png',
  fireElement: 3,
  waterElement: 3,
  earthElement: 4,
  airElement: 3
}

const etherealCanvas: Item = {
  name: 'ethereal canvas',
  imgSrc: '/assets/items/ethereal canvas.png',
  fireElement: 5,
  waterElement: 6,
  earthElement: 4,
  airElement: 4
}

const elementalMatrix: Item = {
  name: 'elemental matrix',
  imgSrc: '/assets/items/elemental matrix.png',
  fireElement: 7,
  waterElement: 7,
  earthElement: 7,
  airElement: 7
}

const spiritWater: Item = {
  name: 'spirit water',
  imgSrc: '/assets/items/spirit water.png',
  fireElement: 13,
  waterElement: 11,
  earthElement: 8,
  airElement: 8
}

const primaMateria: Item = {
  name: 'prima materia',
  imgSrc: '/assets/items/prima materia.png',
  fireElement: 18,
  waterElement: 17,
  earthElement: 15,
  airElement: 17
}

const philosophersStone: Item = {
  name: "philosopher's stone",
  imgSrc: "/assets/items/philosopher's stone.png",
  fireElement: 28,
  waterElement: 28,
  earthElement: 28,
  airElement: 28
}

const SHARDS = [fireShard, airShard, earthShard, waterShard]

export const ITEMS = [
  alcohol,
  pebble,
  mandrake,
  aetherFeather,
  phoenixFeather,
  etherealCanvas,
  sulfur,
  dragonsTongue,
  moss,
  steam,
  geyser,
  spiritWater,
  skyEssence,
  elementalSeed,
  woodLog,
  obsidian,
  primaMateria,
  boulder,
  serpentTear,
  elementalMatrix,
  worldTree,
  soul,
  dirt,
  philosophersStone
].sort((i1, i2) => i1.name.localeCompare(i2.name))

export function findItem (itemName: ItemName): Item {
  const foundItem = [...ITEMS, ...SHARDS].find((i) => i.name === itemName)
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

export const isValidCraft = (
  item1: ItemName | null,
  item2: ItemName | null,
  item3: ItemName | null,
  item4: ItemName | null,
  craft: ItemName
): boolean => {
  if (item1 === null || item2 === null || item3 === null || item4 === null || craft == null) return false

  const i1 = findItem(item1)
  const i2 = findItem(item2)
  const i3 = findItem(item3)
  const i4 = findItem(item4)
  const result = findItem(craft)

  const totalFire = calcTotalFireElement(i1, i2, i3, i4)
  const totalWater = calcTotalWaterElement(i1, i2, i3, i4)
  const totalEarth = calcTotalEarthElement(i1, i2, i3, i4)
  const totalAir = calcTotalAirElement(i1, i2, i3, i4)

  if (
    totalFire === result.fireElement &&
    totalWater === result.waterElement &&
    totalEarth === result.earthElement &&
    totalAir === result.airElement
  ) {
    return true
  }

  return false
}
