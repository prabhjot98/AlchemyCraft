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
        <div
          class="flex flex-row gap-2 align-middle"
          onClick={() => {
            handleBlacksmith()
          }}
        >
          <img
            src="../../public/assets/items/blacksmith__Anime_S3844297624_St40_G7 (Custom).png"
            class="min-h-32 min-w-32 rounded-xl"
          />
          <button>Give me a gold ore and I'll give you a machine that can generate fire shard 1's</button>
        </div>
        <div
          class="flex flex-row gap-2 align-middle"
          onClick={() => {
            handleOldMan()
          }}
        >
          <img
            src="../../public/assets/items/drunk_happy_old_man__Anime_S2426875797_St40_G7 (Custom).png"
            class="min-h-32 min-w-32 rounded-xl"
          />
          <button>Old man: Give me a alcohol and I'll give you a machine that can generate water shard 1's</button>
        </div>
        <div
          class="flex flex-row gap-2 align-middle"
          onClick={() => {
            handleShopkeeper()
          }}
        >
          <img
            src="../../public/assets/items/merchant__Anime_S3469690194_St40_G7 (Custom).png"
            class="min-h-32 min-w-32 rounded-xl"
          />
          <button>Shopkeeper: Give me a glass and I'll give you a machine that can generate earth shard 1's</button>
        </div>
        <div
          class="flex flex-row gap-2 align-middle"
          onClick={() => {
            handleFarmer()
          }}
        >
          <img
            src="../../public/assets/items/farmer__Anime_S3891257133_St40_G7 (Custom).png"
            class="min-h-32 min-w-32 rounded-xl"
          />

          <button>Farmer: Give me a mandrake and I'll give you a machine that can generate air shard 1's</button>
        </div>
        <div
          class="flex flex-row gap-2 align-middle"
          onClick={() => {
            handleUSA()
          }}
        >
          <img
            src="../../public/assets/items/man_wearing_the_american_flag_as_a_bandana__Anime_S3665157605_St40_G7 (Custom).png"
            class="min-h-32 min-w-32 rounded-xl"
          />
          <button>USA: Give us a bomb and we'll give you 1000G</button>
        </div>
      </div>
      <h4 innerText={error()} />
    </div>
  )
}
