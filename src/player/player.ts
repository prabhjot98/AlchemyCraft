import { createStore, type SetStoreFunction } from 'solid-js/store'
import { type ItemName } from '../items/items'
import { createContext, useContext } from 'solid-js'

export interface Player {
  items: Map<ItemName, number>
  slot1: ItemName | null
  slot2: ItemName | null
  slot3: ItemName | null
  slot4: ItemName | null
  selectedCraft: ItemName | null
}

export function createDefaultInventory () {
  return createStore<Player>({
    items: new Map<ItemName, number>(),
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    selectedCraft: null
  })
}

export const PlayerContext = createContext<[Player, SetStoreFunction<Player>]>()
PlayerContext.defaultValue = createDefaultInventory()

export function usePlayer () {
  const player = useContext(PlayerContext)
  if (player === undefined) {
    throw new Error('No value in playerContext')
  }
  return player
}

export const removeItem = (itemName: ItemName) => {
  const [, setInventory] = usePlayer()
  setInventory('items', (i) => {
    const newMap = new Map(i)
    const count = newMap.get(itemName) ?? 0
    if (count === 1) {
      newMap.delete(itemName)
    } else {
      newMap.set(itemName, count - 1)
    }
    return newMap
  })
}

export const addItem = (itemName: ItemName, amount?: number) => {
  const [, setInventory] = usePlayer()
  setInventory('items', (i) => {
    const newMap = new Map(i)
    const count = newMap.get(itemName) ?? 0
    newMap.set(itemName, count + (amount ?? 1))
    return newMap
  })
}

export const setSlot = (itemName: ItemName | null, slot: '1' | '2' | '3' | '4') => {
  const [, setInventory] = usePlayer()
  if (itemName === null) {
    setInventory(`slot${slot}`, itemName)
    return
  }
  setInventory(`slot${slot}`, itemName)
}
