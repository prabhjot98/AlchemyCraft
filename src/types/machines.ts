import { type SetStoreFunction } from 'solid-js/store'
import { type Item } from './items'
import { type Inventory } from './inventory'

export interface Compressor {
  type: Item
}

export type Machine = Compressor

export const _addMachine = (setInventory: SetStoreFunction<Inventory>) => {
  return (machine: Machine) => {
    setInventory('machines', (m) => {
      const newMachines = [...m]
      newMachines.push(machine)
      return newMachines
    })
  }
}
