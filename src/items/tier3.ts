import { type Item } from './items'

export const tinOre: Item = {
  type: 'tin ore',
  tier: 3,
  fireElement: 1,
  waterElement: 0,
  earthElement: 9,
  airElement: 1
}

export const vinegar: Item = {
  type: 'vinegar',
  tier: 3,
  fireElement: 0,
  waterElement: 9,
  earthElement: 0,
  airElement: 9
}

export const firePotion: Item = {
  type: 'fire potion',
  tier: 3,
  fireElement: 6,
  waterElement: 0,
  earthElement: 9,
  airElement: 0
}

export const tierThreeItems = [tinOre, vinegar, firePotion]
