import { For, createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addGold, _addItem, _removeGold, _removeItem, type Inventory } from '../types/inventory'
import { SHARDS, randomItemFrom } from '../types/item'
import { RECIPES } from '../types/recipes'

export const ShopDisplay = (props: { inventory: Inventory, setInventory: SetStoreFunction<Inventory> }): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const addGold = _addGold(props.setInventory)
  const removeGold = _removeGold(props.setInventory)
  const addItem = _addItem(props.setInventory)
  const removeItem = _removeItem(props.setInventory)

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
    removeGold(cost)
    addItem(randomItemFrom(SHARDS))
  }

  const handleSell = (item: string): void => {
    setError('')
    if (!Object.keys(props.inventory.items).some((r) => JSON.parse(r).type === item)) {
      setError(`You don't have a ${item} in your inventory`)
      return
    }
    const soldItem = RECIPES.find((recipe) => recipe.type === item)
    if (soldItem == null) {
      console.log('Failed to find recipe')
      return
    }
    removeItem(soldItem)
    addGold(buyingList[item])
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
