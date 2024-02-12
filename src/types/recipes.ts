import { type Reagent } from './reagents'

export type Recipe = Reagent

export const SAND: Recipe = {
  type: 'sand',
  fireElement: 0,
  waterElement: 0,
  earthElement: 2,
  airElement: 2
}

export const FIRE_POTION: Recipe = {
  type: 'fire potion',
  fireElement: 6,
  waterElement: 2,
  earthElement: 4,
  airElement: 0
}

export const GLASS: Recipe = {
  type: 'glass',
  fireElement: 2,
  waterElement: 0,
  earthElement: 2,
  airElement: 2
}

export const VINEGAR: Recipe = {
  type: 'vinegar',
  fireElement: 0,
  waterElement: 4,
  earthElement: 1,
  airElement: 4
}

export const fireShard2: Recipe = {
  type: 'fire shard 2',
  fireElement: 2,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard2: Recipe = {
  type: 'water shard 2',
  fireElement: 0,
  waterElement: 2,
  earthElement: 0,
  airElement: 0
}

export const earthShard2: Recipe = {
  type: 'earth shard 2',
  fireElement: 0,
  waterElement: 0,
  earthElement: 2,
  airElement: 0
}

export const airShard2: Recipe = {
  type: 'air shard 2',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 2
}

export const fireShard4: Recipe = {
  type: 'fire shard 4',
  fireElement: 4,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard4: Recipe = {
  type: 'water shard 4',
  fireElement: 0,
  waterElement: 4,
  earthElement: 0,
  airElement: 0
}

export const earthShard4: Recipe = {
  type: 'earth shard 4',
  fireElement: 0,
  waterElement: 0,
  earthElement: 4,
  airElement: 0
}

export const airShard4: Recipe = {
  type: 'air shard 4',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 4
}

export const fireShard8: Recipe = {
  type: 'fire shard 8',
  fireElement: 8,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const waterShard8: Recipe = {
  type: 'water shard 8',
  fireElement: 0,
  waterElement: 8,
  earthElement: 0,
  airElement: 0
}

export const earthShard8: Recipe = {
  type: 'earth shard 8',
  fireElement: 0,
  waterElement: 0,
  earthElement: 8,
  airElement: 0
}

export const airShard8: Recipe = {
  type: 'air shard 8',
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 8
}

export const RECIPES = [
  fireShard2,
  waterShard2,
  earthShard2,
  airShard2,
  fireShard4,
  waterShard4,
  earthShard4,
  airShard4,
  fireShard8,
  waterShard8,
  earthShard8,
  airShard8,
  SAND,
  FIRE_POTION,
  GLASS
]
