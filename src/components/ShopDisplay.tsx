import { type Setter, type JSXElement, createSignal, For } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { randomReagent, type Reagent, SHARDS } from '../types/reagents'

export const ShopDisplay = (inventory: Inventory, setInventory: Setter<Inventory>): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const buyingList = {
    sand: 40,
    'fire potion': 200,
    glass: 80
  }

  const buyingItems = Object.keys(buyingList)

  const handlePurchase = (cost: number): void => {
    setError('')
    if (inventory.gold < cost) {
      setError('Not enough gold')
      return
    }
    setInventory((i) => ({ ...i, gold: i.gold - cost }))
    addReagent(randomReagent(SHARDS))
  }

  const handleSell = (item: string): void => {
    setError('')
    if (!inventory.reagents.some((r) => r.type === item)) {
      setError(`You don't have a ${item} in your inventory`)
      return
    }
    removeReagent(item)
    setInventory((i) => ({ ...i, gold: i.gold + buyingList[item] }))
  }

  const addReagent = (reagent: Reagent): void => {
    setInventory((i) => ({ ...i, reagents: [...i.reagents, reagent] }))
  }

  const removeReagent = (reagentType: string): void => {
    const newReagents = [...inventory.reagents]
    const reagentToRemove = newReagents.findIndex((r) => r.type === reagentType)
    newReagents.splice(reagentToRemove, 1)
    setInventory((i) => ({ ...i, reagents: newReagents }))
  }

  return (
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl font-bold" textContent="Shop" />
      <button
        class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
        onClick={() => {
          handlePurchase(5)
        }}
      >
        Buy a random shard for 5 gold
      </button>
      <For each={buyingItems}>
        {(item) => {
          return (
            <button
              class="text-xl p-2 rounded-md bg-green-500 w-64"
              onClick={(e) => {
                handleSell(e.currentTarget.value)
              }}
              value={item}
            >
              Sell {item} for {buyingList[item]} gold
            </button>
          )
        }}
      </For>
      <p class="" innerText={error()} />
    </div>
  )
}
