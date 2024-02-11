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

export const RECIPES = [fireShard2, waterShard2, earthShard2, airShard2, SAND, FIRE_POTION, GLASS]
