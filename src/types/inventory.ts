import { type Setter } from 'solid-js'
import { type Reagent } from '../types/reagents'

export interface Inventory {
  reagents: Record<string, number>
  gold: number
}

export const removeReagent = (reagentType: Reagent, setInventory: Setter<Inventory>): void => {
  const key = JSON.stringify(reagentType)
  setInventory((i) => ({ ...i, reagents: {...i.reagents, [key]: (i.reagents[key] > 1 ? i.reagents[key]-1 : undefined)} }))

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
  const key = JSON.stringify(reagent)

    setInventory((i) => ({ ...i, reagents: {...i.reagents, [key]: (i.reagents[key] ? i.reagents[key]+1 : 1)} }))

}

export const addGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold + gold }))
}

export const removeGold = (gold: number, setInventory: Setter<Inventory>): void => {
  setInventory((i) => ({ ...i, gold: i.gold - gold }))
}
