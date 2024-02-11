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

export const SILICON: Recipe = {
  type: 'silicon',
  fireElement: 4,
  waterElement: 0,
  earthElement: 4,
  airElement: 2
}

export const RECIPES = [SAND, FIRE_POTION, GLASS, SILICON]
