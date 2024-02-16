import { type Item } from './item'
import { produce, type SetStoreFunction } from 'solid-js/store'

export interface Inventory {
  items: Record<string, number>
  gold: number
  maxSize: number
  currentSize: number
}

export const _removeItem = (setInventory: SetStoreFunction<Inventory>) => {
  return (itemType: Item) => {
    const key = JSON.stringify(itemType)
    setInventory(
      produce((i) => {
        i.items[key] -= 1
        if (i.items[key] === 0) {
          // yes, this is real typescript
          i.items[key] = undefined as unknown as number
        }
      })
    )
  }
}

export const _addItem = (setInventory: SetStoreFunction<Inventory>) => {
  return (item: Item) => {
    const key = JSON.stringify(item)
    setInventory(
      produce((i) => {
        if (i.items[key] === undefined) {
          i.items[key] = 1
        } else {
          i.items[key] = i.items[key] + 1
        }
      })
    )
  }
}

export const _addGold = (setInventory: SetStoreFunction<Inventory>) => {
  return (gold: number) => {
    setInventory(
      produce((i) => {
        i.gold += gold
      })
    )
  }
}

export const _removeGold = (setInventory: SetStoreFunction<Inventory>) => {
  return (gold: number) => {
    setInventory(
      produce((i) => {
        i.gold -= gold
      })
    )
  }
}
