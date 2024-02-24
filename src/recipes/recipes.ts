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
  airElement: 3
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

export const fireShard3: Recipe = {
  type: 'fire shard 3',
  fireElement: 3,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard3: Recipe = {
  type: 'water shard 3',
  fireElement: 0,
  waterElement: 3,
  earthElement: 0,
  airElement: 0
}

export const earthShard3: Recipe = {
  type: 'earth shard 3',
  fireElement: 0,
  waterElement: 0,
  earthElement: 3,
  airElement: 0
}

export const airShard3: Recipe = {
  type: 'air shard 3',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 3
}

export const fireShard9: Recipe = {
  type: 'fire shard 9',
  fireElement: 9,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard9: Recipe = {
  type: 'water shard 9',
  fireElement: 0,
  waterElement: 9,
  earthElement: 0,
  airElement: 0
}

export const earthShard9: Recipe = {
  type: 'earth shard 9',
  fireElement: 0,
  waterElement: 0,
  earthElement: 9,
  airElement: 0
}

export const airShard9: Recipe = {
  type: 'air shard 9',
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
  airElement: 3
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
  fireShard3,
  waterShard3,
  earthShard3,
  airShard3,
  fireShard9,
  waterShard9,
  earthShard9,
  airShard9,
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
