import { createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addGold, _removeItem, type Inventory } from '../inventory/inventory'

import { _addMachine } from '../generators/generators'
import { alcohol, glass, goldOre, mandrake } from '../recipes/recipes'
import { airShard1, earthShard1, fireShard1, waterShard1 } from '../items/items'
export const QuestDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const addGold = _addGold(props.setInventory)
  const removeItem = _removeItem(props.setInventory)
  const addMachine = _addMachine(props.setInventory)

  const handleBlacksmith = (): void => {
    const questItem = goldOre
    if (props.inventory.items.get(questItem) === undefined) {
      setError(`You don't have a ${questItem.type} in your inventory`)
      return
    }
    removeItem(questItem)
    addMachine({
      type: fireShard1
    })
  }

  const handleOldMan = (): void => {
    const questItem = alcohol
    if (props.inventory.items.get(questItem) === undefined) {
      setError(`You don't have a ${questItem.type} in your inventory`)
      return
    }
    removeItem(questItem)
    addMachine({
      type: waterShard1
    })
  }
  const handleShopkeeper = (): void => {
    const questItem = glass
    if (props.inventory.items.get(questItem) === undefined) {
      setError(`You don't have a ${questItem.type} in your inventory`)
      return
    }
    removeItem(questItem)
    addMachine({
      type: earthShard1
    })
  }
  const handleFarmer = (): void => {
    const questItem = mandrake
    if (props.inventory.items.get(questItem) === undefined) {
      setError(`You don't have a ${questItem.type} in your inventory`)
      return
    }
    removeItem(questItem)
    addMachine({
      type: airShard1
    })
  }
  const handleUSA = (): void => {
    const questItem = goldOre
    if (props.inventory.items.get(questItem) === undefined) {
      setError(`You don't have a ${questItem.type} in your inventory`)
      return
    }
    removeItem(questItem)
    addGold(1000)
  }

  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Quests" />
      <div class="flex flex-wrap gap-1">
        <button
          onClick={() => {
            handleBlacksmith()
          }}
        >
          Blacksmith: Give me a gold ore and I'll give you a machine that can generate fire shard 1's
        </button>
        <button
          onClick={() => {
            handleOldMan()
          }}
        >
          Old man: Give me a alcohol and I'll give you a machine that can generate water shard 1's
        </button>
        <button
          onClick={() => {
            handleShopkeeper()
          }}
        >
          Shopkeeper: Give me a glass and I'll give you a machine that can generate earth shard 1's
        </button>
        <button
          onClick={() => {
            handleFarmer()
          }}
        >
          Farmer: Give me a mandrake and I'll give you a machine that can generate air shard 1's
        </button>
        <button
          onClick={() => {
            handleUSA()
          }}
        >
          USA: Give us a bomb and we'll give you 1000G
        </button>
      </div>
      <h4 innerText={error()} />
    </div>
  )
}
