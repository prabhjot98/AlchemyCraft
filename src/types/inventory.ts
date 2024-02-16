// TODO fix this shit
/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { type Setter } from 'solid-js'
import { type Item } from './item'

export interface Inventory {
  items: Record<string, number>
  gold: number
}

export const _removeItem = (setInventory: Setter<Inventory>) => {
  return (itemType: Item) => {
    const key = JSON.stringify(itemType)
    setInventory((i) => {
      const newItems = { ...i.items }
      newItems[key] -= 1
      if (newItems[key] <= 0) {
        delete newItems[key]
      }
      return { ...i, items: newItems }
    })
  }
}

export const _addItem = (setInventory: Setter<Inventory>) => {
  return (item: Item) => {
    const key = JSON.stringify(item)
    return setInventory((i) => ({
      ...i,
      // HACK what is this sht lol
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      items: { ...i.items, [key]: i.items[key] ? i.items[key] + 1 : 1 }
    }))
  }
}

export const _addGold = (setInventory: Setter<Inventory>) => {
  return (gold: number) => {
    return setInventory((i) => ({ ...i, gold: i.gold + gold }))
  }
}

export const _removeGold = (setInventory: Setter<Inventory>) => {
  return (gold: number) => {
    return setInventory((i) => ({ ...i, gold: i.gold - gold }))
  }
}
