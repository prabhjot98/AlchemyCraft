/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { For, createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addGold, _addItem, _removeGold, _removeItem, type Inventory } from '../types/inventory'
import { type Item, SHARDS, randomItemFrom, fireShard1, waterShard1, earthShard1, airShard1 } from '../types/items'
import {
  RECIPES,
  sand,
  coal,
  copperOre,
  firePotion,
  glass,
  goldOre,
  tinOre,
  mandrake,
  vinegar,
  bomb,
  alcohol,
  bronze
} from '../types/recipes'
import { _addMachine } from '../types/machines'

export const ShopDisplay = (props: { inventory: Inventory, setInventory: SetStoreFunction<Inventory> }): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const addGold = _addGold(props.setInventory)
  const removeGold = _removeGold(props.setInventory)
  const addItem = _addItem(props.setInventory)
  const removeItem = _removeItem(props.setInventory)
  const addMachine = _addMachine(props.setInventory)

  const buyingList = new Map<Item, number>()
  buyingList.set(copperOre, 30)
  buyingList.set(coal, 30)
  buyingList.set(sand, 60)
  buyingList.set(tinOre, 60)
  buyingList.set(mandrake, 100)
  buyingList.set(glass, 100)
  buyingList.set(goldOre, 140)
  buyingList.set(vinegar, 180)
  buyingList.set(alcohol, 200)
  buyingList.set(bronze, 240)
  buyingList.set(firePotion, 300)
  buyingList.set(bomb, 999)

  const handlePurchaseRandomShard = (cost: number): void => {
    setError('')
    if (props.inventory.gold < cost) {
      setError('Not enough gold')
      return
    }
    removeGold(cost)
    addItem(randomItemFrom(SHARDS))
  }

  const handlePurchaseGenerator = (cost: number, type: Item): void => {
    setError('')
    if (props.inventory.gold < cost) {
      setError('Not enough gold')
      return
    }
    removeGold(cost)
    addMachine({
      type
    })
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
      <h1 textContent="Shop" />
      <div class="flex flex-wrap gap-1">
        <button
          class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
          onClick={() => {
            handlePurchaseRandomShard(5)
          }}
          innerText="Buy a random shard for 5 gold"
        />
        <button
          class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
          onClick={() => {
            handlePurchaseGenerator(100, fireShard1)
          }}
          innerText="Buy a fire shard 1 generator for 100 gold"
        />
        <button
          class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
          onClick={() => {
            handlePurchaseGenerator(100, waterShard1)
          }}
          innerText="Buy a water shard 1 generator for 100 gold"
        />
        <button
          class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
          onClick={() => {
            handlePurchaseGenerator(100, earthShard1)
          }}
          innerText="Buy an earth shard 1 generator for 100 gold"
        />
        <button
          class="text-xl bg-yellow-400 p-2 rounded-md w-fit"
          onClick={() => {
            handlePurchaseGenerator(100, airShard1)
          }}
          innerText="Buy an air shard 1 generator for 100 gold"
        />
        <For each={[...buyingList.keys()]}>
          {(item) => {
            return (
              <button
                class="text-lg p-2 rounded-md bg-green-500 w-24 h-24"
                onClick={(e) => {
                  handleSell(e.currentTarget.value)
                }}
                value={item.type}
              >
                {item.type} for {buyingList.get(item)}G
              </button>
            )
          }}
        </For>
      </div>
      <h4 innerText={error()} />
    </div>
  )
}
