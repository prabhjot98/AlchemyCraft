// TODO fix this shit
/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { type Setter } from 'solid-js'
import { type Item } from './item'

export interface Inventory {
  reagents: Record<string, number>
  gold: number
}

export const removeReagent = (reagentType: Item, setInventory: Setter<Inventory>): void => {
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

export const removeReagent2 = (setInventory: Setter<Inventory>): ((reagentType: string) => void) => {
  return (reagentType: string) => {
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

export const addReagent = (reagent: Item, setInventory: Setter<Inventory>): void => {
  const key = JSON.stringify(reagent)

  setInventory((i) => ({ ...i, reagents: { ...i.reagents, [key]: i.reagents[key] !== 0 ? i.reagents[key] + 1 : 1 } }))
}

export const addGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold + gold }))
}

export const removeGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold - gold }))
}
