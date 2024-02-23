import { type SetStoreFunction } from 'solid-js/store'
import { type Item } from '../items/items'
import { type Generator } from '../generators/generators'
import { type Quest } from '../quests/quest'

export interface Inventory {
  items: Map<Item, number>
  gold: number
  maxSize: number
  currentSize: number
  machines: Generator[]
  completedQuests: Quest[]
}

export const _removeItem = (setInventory: SetStoreFunction<Inventory>) => {
  return (item: Item) => {
    setInventory('items', (i) => {
      const newMap = new Map(i)
      const count = newMap.get(item) ?? 0
      if (count === 1) {
        newMap.delete(item)
      } else {
        newMap.set(item, count - 1)
      }
      return newMap
    })
  }
}

export const _addItem = (setInventory: SetStoreFunction<Inventory>) => {
  return (item: Item, amount?: number) => {
    setInventory('items', (i) => {
      const newMap = new Map(i)
      const count = newMap.get(item) ?? 0
      newMap.set(item, count + (amount ?? 1))
      return newMap
    })
  }
}

export const _addGold = (setInventory: SetStoreFunction<Inventory>) => {
  return (gold: number) => {
    setInventory('gold', (g) => g + gold)
  }
}

export const _removeGold = (setInventory: SetStoreFunction<Inventory>) => {
  return (gold: number) => {
    setInventory('gold', (g) => g - gold)
  }
}

export const _completeQuest = (setInventory: SetStoreFunction<Inventory>) => {
  return (quest: Quest) => {
    setInventory('completedQuests', (c) => {
      const newMap = [...c]
      newMap.push(quest)
      return newMap
    })
  }
}
