import { type Item } from '../items/items'

export type Recipe = Item

export const clay: Recipe = {
  type: 'clay',
  fireElement: 0,
  waterElement: 1,
  earthElement: 3,
  airElement: 1
}

export const ash: Recipe = {
  type: 'ash',
  fireElement: 1,
  waterElement: 0,
  earthElement: 1,
  airElement: 1
}

export const steam: Recipe = {
  type: 'steam',
  fireElement: 1,
  waterElement: 1,
  earthElement: 0,
  airElement: 1
}

export const cobblestone: Recipe = {
  type: 'cobblestone',
  fireElement: 1,
  waterElement: 1,
  earthElement: 1,
  airElement: 0
}

export const sparklingWater: Recipe = {
  type: 'sparkling water',
  fireElement: 0,
  waterElement: 3,
  earthElement: 0,
  airElement: 2
}

export const pot: Recipe = {
  type: 'pot',
  fireElement: 2,
  waterElement: 1,
  earthElement: 3,
  airElement: 1
}

export const sand: Recipe = {
  type: 'sand',
  fireElement: 0,
  waterElement: 0,
  earthElement: 3,
  airElement: 2
}

export const firePotion: Recipe = {
  type: 'fire potion',
  fireElement: 6,
  waterElement: 3,
  earthElement: 9,
  airElement: 0
}

export const vinegar: Recipe = {
  type: 'vinegar',
  fireElement: 0,
  waterElement: 9,
  earthElement: 0,
  airElement: 9
}

export const mediumFireShard: Recipe = {
  type: 'medium fire shard',
  fireElement: 3,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const mediumWaterShard: Recipe = {
  type: 'medium water shard',
  fireElement: 0,
  waterElement: 3,
  earthElement: 0,
  airElement: 0
}

export const mediumEarthShard: Recipe = {
  type: 'medium earth shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 3,
  airElement: 0
}

export const mediumAirShard: Recipe = {
  type: 'medium air shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 3
}

export const largeFireShard: Recipe = {
  type: 'large fire shard',
  fireElement: 9,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const largeWaterShard: Recipe = {
  type: 'large water shard',
  fireElement: 0,
  waterElement: 9,
  earthElement: 0,
  airElement: 0
}

export const largeEarthShard: Recipe = {
  type: 'large earth shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 9,
  airElement: 0
}

export const largeAirShard: Recipe = {
  type: 'large air shard',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 9
}

export const ironOre: Item = {
  type: 'iron ore',
  fireElement: 3,
  waterElement: 0,
  earthElement: 3,
  airElement: 0
}

export const copperOre: Item = {
  type: 'copper ore',
  fireElement: 1,
  waterElement: 1,
  earthElement: 3,
  airElement: 0
}

export const tinOre: Item = {
  type: 'tin ore',
  fireElement: 1,
  waterElement: 0,
  earthElement: 9,
  airElement: 1
}

export const coal: Item = {
  type: 'coal',
  fireElement: 2,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const bronze: Item = {
  type: 'bronze',
  fireElement: 3,
  waterElement: 0,
  earthElement: 6,
  airElement: 0
}

export const alcohol: Item = {
  type: 'alcohol',
  fireElement: 3,
  waterElement: 6,
  earthElement: 0,
  airElement: 0
}

export const glass: Recipe = {
  type: 'glass',
  fireElement: 6,
  waterElement: 0,
  earthElement: 3,
  airElement: 2
}

export const mandrake: Item = {
  type: 'mandrake',
  fireElement: 0,
  waterElement: 3,
  earthElement: 3,
  airElement: 3
}

export const goldOre: Item = {
  type: 'gold ore',
  fireElement: 3,
  waterElement: 0,
  earthElement: 9,
  airElement: 0
}

export const bomb: Item = {
  type: 'bomb',
  fireElement: 9,
  waterElement: 3,
  earthElement: 15,
  airElement: 9
}

export const RECIPES = [
  mediumFireShard,
  mediumWaterShard,
  mediumEarthShard,
  mediumAirShard,
  largeFireShard,
  largeWaterShard,
  largeEarthShard,
  largeAirShard,
  sand,
  glass,
  vinegar,
  ironOre,
  copperOre,
  tinOre,
  goldOre,
  mandrake,
  bronze,
  coal,
  alcohol,
  firePotion,
  bomb,
  sparklingWater,
  cobblestone,
  steam,
  clay,
  ash,
  steam,
  pot
]
