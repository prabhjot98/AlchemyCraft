// TODO fix this shit
/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { type Setter } from 'solid-js'
import { type Item } from './item'

export interface Inventory {
  reagents: Record<string, number>
  gold: number
}

export const _removeReagent = (setInventory: Setter<Inventory>) => {
  return (reagentType: Item) => {
    const key = JSON.stringify(reagentType)
    setInventory((i) => {
      const newReagents = { ...i.reagents }
      newReagents[key] -= 1
      if (newReagents[key] <= 0) {
        delete newReagents[key]
      }
      return { ...i, reagents: newReagents }
    })
  }
}

export const _addReagent = (setInventory: Setter<Inventory>) => {
  return (reagent: Item) => {
    const key = JSON.stringify(reagent)
    return setInventory((i) => ({
      ...i,
      // HACK what is this sht lol
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      reagents: { ...i.reagents, [key]: i.reagents[key] ? i.reagents[key] + 1 : 1 }
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
