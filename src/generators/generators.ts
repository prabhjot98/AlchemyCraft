import { type SetStoreFunction } from 'solid-js/store'
import { type Item } from '../items/items'
import { type Inventory } from '../inventory/inventory'

export interface Generator {
  type: Item
}

export const _addMachine = (setInventory: SetStoreFunction<Inventory>) => {
  return (machine: Generator) => {
    setInventory('machines', (m) => {
      const newMachines = [...m]
      newMachines.push(machine)
      return newMachines
    })
  }
}
