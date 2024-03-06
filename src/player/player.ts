/* eslint-disable no-fallthrough */
import { createStore, type SetStoreFunction } from 'solid-js/store'
import { STARTER_ITEMS, type Item } from '../items/items'
import { _addMachine, type Generator } from '../generators/generators'
import { isGeneratorReward, isGoldReward, isItemReward, type Quest } from '../quests/quest'
import { createContext, useContext } from 'solid-js'
import { tierTwoItems } from '../items/tier2'
import { tierThreeItems } from '../items/tier3'
import { tierFourItems } from '../items/tier4'
import toast from 'solid-toast'

export interface Player {
  items: Map<Item, number>
  gold: number
  maxSize: number
  currentSize: number
  machines: Generator[]
  completedQuests: Quest[]
  knownItems: Item[]
  level: number
}

export function sortItems (a: Item, b: Item): number {
  if (a.tier < b.tier) {
    return -1
  } else if (a.tier > b.tier) {
    return 1
  } else {
    if (a.type < b.type) {
      return -1
    } else if (a.type > b.type) {
      return 1
    }
    return 0
  }
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
    level: 1,
    get knownItems () {
      const knownItems = [...STARTER_ITEMS]
      switch (this.level) {
        case 4:
          knownItems.push(...tierFourItems)
        case 3:
          knownItems.push(...tierThreeItems)
        case 2:
          knownItems.push(...tierTwoItems)
          break
      }
      return knownItems.sort(sortItems)
    }
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
    toast(`Obtained ${item.type}`)
  }
}

export const _addGold = (setInventory: SetStoreFunction<Player>) => {
  return (gold: number) => {
    setInventory('gold', (g) => g + gold)
    toast(`Obtained ${gold.toString()} gold`)
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
    _removeItem(setInventory)(quest.questItem)
    quest.rewards.forEach((reward) => {
      if (isItemReward(reward)) {
        _addItem(setInventory)(reward.item)
      }
      if (isGeneratorReward(reward)) {
        _addMachine(setInventory)(reward.generator)
      }
      if (isGoldReward(reward)) {
        _addGold(setInventory)(reward.gold)
      }
    })
  }
}

export function levelUp (setInventory: SetStoreFunction<Player>) {
  setInventory('level', (l) => l + 1)
  toast('LEVEL UP!')
}
