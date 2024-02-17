/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { For, createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addGold, _addItem, _removeGold, _removeItem, type Inventory } from '../types/inventory'
import { type Item, SHARDS, randomItemFrom } from '../types/item'
import {
  RECIPES,
  SAND,
  coal,
  copperOre,
  firePotion,
  glass,
  goldOre,
  ironOre,
  mandrake,
  vinegar
} from '../types/recipes'

export const ShopDisplay = (props: { inventory: Inventory, setInventory: SetStoreFunction<Inventory> }): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const addGold = _addGold(props.setInventory)
  const removeGold = _removeGold(props.setInventory)
  const addItem = _addItem(props.setInventory)
  const removeItem = _removeItem(props.setInventory)

  const buyingList = new Map<Item, number>()
  buyingList.set(copperOre, 30)
  buyingList.set(coal, 30)
  buyingList.set(SAND, 60)
  buyingList.set(ironOre, 60)
  buyingList.set(mandrake, 100)
  buyingList.set(glass, 100)
  buyingList.set(goldOre, 140)
  buyingList.set(vinegar, 180)
  buyingList.set(firePotion, 300)

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
    const soldItem = RECIPES.find((recipe) => recipe.type === item)
    if (soldItem == null) {
      console.log('Failed to find recipe')
      return
    }
    if (props.inventory.items.get(soldItem) === undefined) {
      setError(`You don't have a ${item} in your inventory`)
      return
    }
    removeItem(soldItem)
    addGold(buyingList.get(soldItem)!)
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
      <For each={[...buyingList.keys()]}>
        {(item) => {
          return (
            <button
              class="text-xl p-2 rounded-md bg-green-500 w-64"
              onClick={(e) => {
                handleSell(e.currentTarget.value)
              }}
              value={item.type}
            >
              Sell {item.type} for {buyingList.get(item)} gold
            </button>
          )
        }}
      </For>
      <p class="" innerText={error()} />
    </div>
  )
}
