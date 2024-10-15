import { createContext, useContext } from 'solid-js'
import { createStore, type SetStoreFunction } from 'solid-js/store'
import toast from 'solid-toast'
import { sortByTotalElements, type ItemName } from './items'

export interface Player {
  unlockedItems: ItemName[]
  craftingCircle: ItemName[]
  selectedCraft: ItemName | null
}

export function createDefaultInventory () {
  return createStore<Player>({
    unlockedItems: ['fire shard', 'water shard', 'earth shard', 'air shard'],
    craftingCircle: [],
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

export const unlockItem = (itemName: ItemName) => {
  const [, setPlayer] = usePlayer()
  setPlayer('unlockedItems', (i) => {
    const newArr = [...i]
    newArr.push(itemName)
    return [...new Set(newArr)].sort(sortByTotalElements)
  })
}

export const addToCircle = (itemName: ItemName) => {
  const [, setPlayer] = usePlayer()
  setPlayer('craftingCircle', (i) => {
    if (i.length === 4) {
      toast.error('Cannot add anymore items!')
      return i
    }
    const newArr = [...i]
    newArr.push(itemName)
    return newArr
  })
}

export const removeFromCircle = (slot: number) => {
  const [, setPlayer] = usePlayer()
  setPlayer('craftingCircle', (i) => {
    const newArr = [...i].filter((_item, index) => index !== slot)
    return newArr
  })
}

export const clearCircle = () => {
  const [, setPlayer] = usePlayer()
  setPlayer('craftingCircle', () => {
    return []
  })
}
