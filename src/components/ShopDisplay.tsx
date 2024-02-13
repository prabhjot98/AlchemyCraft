import { type Setter, type JSXElement, createSignal, For } from 'solid-js'
import { removeReagent, type Inventory, addReagent, addGold, removeGold } from '../types/inventory'
import { randomReagent, SHARDS } from '../types/reagents'

export const ShopDisplay = (props: { inventory: Inventory, setInventory: Setter<Inventory> }): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const buyingList: Record<string, number> = {
    sand: 60,
    'fire potion': 300,
    glass: 100,
    vinegar: 180
  }

  const buyingItems = Object.keys(buyingList)

  const handlePurchase = (cost: number): void => {
    setError('')
    if (props.inventory.gold < cost) {
      setError('Not enough gold')
      return
    }
    removeGold(cost, props.setInventory)
    addReagent(randomReagent(SHARDS), props.setInventory)
  }

  const handleSell = (item: string): void => {
    setError('')
    if (!props.inventory.reagents.some((r) => r.type === item)) {
      setError(`You don't have a ${item} in your inventory`)
      return
    }
    removeReagent(item, props.setInventory)
    addGold(buyingList[item], props.setInventory)
  }

  return (
    <div class="flex flex-col gap-2 w-full h-full">
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
