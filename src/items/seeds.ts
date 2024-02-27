import { type Item } from './items'

export type Seed = Item & { grows: Item }

export const cabbage: Item = {
  type: 'cabbage',
  fireElement: 0,
  waterElement: 1,
  earthElement: 1,
  airElement: 0
}

export const carrot: Item = {
  type: 'carrot',
  fireElement: 0,
  waterElement: 1,
  earthElement: 2,
  airElement: 0
}

export const carrotSeed: Seed = {
  type: 'carrot seed',
  grows: carrot,
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}

export const cabbageSeed: Seed = {
  type: 'cabbage seed',
  grows: cabbage,
  fireElement: 0,
  waterElement: 0,
  earthElement: 0,
  airElement: 0
}
