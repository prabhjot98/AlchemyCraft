import { createStore, type SetStoreFunction } from 'solid-js/store'
import { type Item } from '../items/items'
import { type Generator } from '../generators/generators'
import { type Quest } from '../quests/quest'
import { createContext, useContext } from 'solid-js'
import { RECIPES } from '../recipes/recipes'

export interface Player {
  items: Map<Item, number>
  gold: number
  maxSize: number
  currentSize: number
  machines: Generator[]
  completedQuests: Quest[]
  knownItems: Item[]
}

export function createDefaultInventory () {
  return createStore<Player>({
    items: new Map<Item, number>(),
    gold: 0,
    maxSize: 15,
    get currentSize () {
      return [...this.items.keys()].length
    },
    machines: [],
    completedQuests: [],
    knownItems: RECIPES
  })
}

export const PlayerContext = createContext<[Player, SetStoreFunction<Player>]>()
PlayerContext.defaultValue = createDefaultInventory()

export function usePlayer () {
  const player = useContext(PlayerContext)
  if (player === undefined) {
    throw new Error('No value in worldContext')
  }
  return player
}

export const _removeItem = (setInventory: SetStoreFunction<Player>) => {
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

export const _addItem = (setInventory: SetStoreFunction<Player>) => {
  return (item: Item, amount?: number) => {
    setInventory('items', (i) => {
      const newMap = new Map(i)
      const count = newMap.get(item) ?? 0
      newMap.set(item, count + (amount ?? 1))
      return newMap
    })
  }
}

export const _addGold = (setInventory: SetStoreFunction<Player>) => {
  return (gold: number) => {
    setInventory('gold', (g) => g + gold)
  }
}

export const _removeGold = (setInventory: SetStoreFunction<Player>) => {
  return (gold: number) => {
    setInventory('gold', (g) => g - gold)
  }
}

export const _completeQuest = (setInventory: SetStoreFunction<Player>) => {
  return (quest: Quest) => {
    setInventory('completedQuests', (c) => {
      const newMap = [...c]
      newMap.push(quest)
      return newMap
    })
  }
}
