import { type Item } from './items'

export const goldOre: Item = {
  type: 'gold ore',
  tier: 2,
  fireElement: 3,
  waterElement: 0,
  earthElement: 8,
  airElement: 0
}

export const mandrake: Item = {
  type: 'mandrake',
  tier: 2,
  fireElement: 0,
  waterElement: 3,
  earthElement: 3,
  airElement: 3
}

export const alcohol: Item = {
  type: 'alcohol',
  tier: 2,
  fireElement: 3,
  waterElement: 6,
  earthElement: 0,
  airElement: 0
}

export const bronze: Item = {
  type: 'bronze',
  tier: 2,
  fireElement: 3,
  waterElement: 0,
  earthElement: 6,
  airElement: 0
}

export const copperOre: Item = {
  type: 'copper ore',
  tier: 2,
  fireElement: 1,
  waterElement: 1,
  earthElement: 3,
  airElement: 0
}

export const ironOre: Item = {
  type: 'iron ore',
  tier: 2,
  fireElement: 3,
  waterElement: 0,
  earthElement: 2,
  airElement: 0
}

export const glass: Item = {
  type: 'glass',
  tier: 2,
  fireElement: 6,
  waterElement: 0,
  earthElement: 2,
  airElement: 1
}

export const clay: Item = {
  type: 'clay',
  tier: 2,
  fireElement: 0,
  waterElement: 1,
  earthElement: 3,
  airElement: 1
}

export const pot: Item = {
  type: 'pot',
  tier: 2,
  fireElement: 2,
  waterElement: 1,
  earthElement: 3,
  airElement: 1
}

export const sparklingWater: Item = {
  type: 'sparkling water',
  tier: 2,
  fireElement: 0,
  waterElement: 3,
  earthElement: 0,
  airElement: 2
}

export const tierTwoItems = [goldOre, mandrake, alcohol, bronze, copperOre, ironOre, glass, clay, pot, sparklingWater]

export const largeAirShard: Item = {
  type: 'large air shard',
  tier: 2,
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 9
}

export const largeFireShard: Item = {
  type: 'large fire shard',
  tier: 2,
  fireElement: 9,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const largeWaterShard: Item = {
  type: 'large water shard',
  tier: 2,
  fireElement: 0,
  waterElement: 9,
  earthElement: 0,
  airElement: 0
}

export const largeEarthShard: Item = {
  type: 'large earth shard',
  tier: 2,
  fireElement: 0,
  waterElement: 0,
  earthElement: 9,
  airElement: 0
}

export const largeShards = [largeEarthShard, largeAirShard, largeFireShard, largeWaterShard]
