import { type SetStoreFunction } from 'solid-js/store'
import { type Item } from '../items/items'
import { type Player } from '../player/player'

export interface Generator {
  type: Item
}

export const _addMachine = (setInventory: SetStoreFunction<Player>) => {
  return (machine: Generator) => {
    setInventory('machines', (m) => {
      const newMachines = [...m]
      newMachines.push(machine)
      return newMachines
    })
  }
}
