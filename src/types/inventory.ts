import { type Setter } from 'solid-js'
import { type Reagent } from '../types/reagents'

export interface Inventory {
  reagents: Reagent[]
  gold: number
}

export const removeReagent = (reagentType: string, setInventory: Setter<Inventory>): void => {
  setInventory((i) => {
    const newReagents = [...i.reagents]
    const reagentToRemove = newReagents.findIndex((r) => r.type === reagentType)
    newReagents.splice(reagentToRemove, 1)
    return { ...i, reagents: newReagents }
  })
}

export const removeReagent2 = (setInventory: Setter<Inventory>): ((reagentType: string) => void) => {
  return (reagentType: string) => {
    setInventory((i) => {
      const newReagents = [...i.reagents]
      const reagentToRemove = newReagents.findIndex((r) => r.type === reagentType)
      newReagents.splice(reagentToRemove, 1)
      return { ...i, reagents: newReagents }
    })
  }
}

export const addReagent = (reagent: Reagent, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, reagents: [...i.reagents, reagent] }))
}

export const addGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold + gold }))
}

export const removeGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold - gold }))
}
