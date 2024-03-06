import { type Item } from './items'

export const ash: Item = {
  type: 'ash',
  tier: 1,
  fireElement: 1,
  waterElement: 0,
  earthElement: 1,
  airElement: 1
}

export const steam: Item = {
  type: 'steam',
  tier: 1,
  fireElement: 1,
  waterElement: 1,
  earthElement: 0,
  airElement: 1
}

export const copperNugget: Item = {
  type: 'copper nugget',
  tier: 1,
  fireElement: 1,
  waterElement: 1,
  earthElement: 1,
  airElement: 0
}

export const sand: Item = {
  type: 'sand',
  tier: 1,
  fireElement: 0,
  waterElement: 0,
  earthElement: 2,
  airElement: 1
}

export const sparklingWater: Item = {
  type: 'sparkling water',
  tier: 1,
  fireElement: 0,
  waterElement: 2,
  earthElement: 0,
  airElement: 1
}

export const soot: Item = {
  type: 'soot',
  tier: 1,
  fireElement: 1,
  waterElement: 0,
  earthElement: 0,
  airElement: 2
}

export const cobblestone: Item = {
  type: 'cobblestone',
  tier: 1,
  fireElement: 1,
  waterElement: 1,
  earthElement: 1,
  airElement: 0
}

export const coal: Item = {
  type: 'coal',
  tier: 1,
  fireElement: 2,
  waterElement: 0,
  earthElement: 1,
  airElement: 0
}

export const tierOneItems = [ash, steam, cobblestone, coal, copperNugget, sand, sparklingWater, soot]

export const mediumFireShard: Item = {
  type: 'medium fire shard',
  tier: 1,
  fireElement: 3,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const mediumWaterShard: Item = {
  type: 'medium water shard',
  tier: 1,
  fireElement: 0,
  waterElement: 3,
  earthElement: 0,
  airElement: 0
}

export const mediumEarthShard: Item = {
  type: 'medium earth shard',
  tier: 1,
  fireElement: 0,
  waterElement: 0,
  earthElement: 3,
  airElement: 0
}

export const mediumAirShard: Item = {
  type: 'medium air shard',
  tier: 1,
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 3
}

export const mediumShards = [mediumWaterShard, mediumEarthShard, mediumFireShard, mediumAirShard]
