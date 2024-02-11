import { type Setter, type JSXElement, createSignal } from 'solid-js'
import { type Inventory } from '../types/inventory'
import { randomReagent, REAGENTS, type Reagent } from '../types/reagents'

export const ShopDisplay = (inventory: Inventory, setInventory: Setter<Inventory>): JSXElement => {
  const [error, setError] = createSignal<string>('')

  const handlePurchase = (cost: number): void => {
    setError('')
    if (inventory.gold < cost) {
      setError('Not enough gold')
      return
    }
    setInventory((i) => ({ ...i, gold: i.gold - cost }))
    handleAddReagent(randomReagent(REAGENTS))
  }

  const handleAddReagent = (reagent: Reagent): void => {
    setInventory((i) => ({ ...i, reagents: [...i.reagents, reagent] }))
  }

  return (
    <div>
      <h1 class="text-4xl font-bold" textContent="Shop" />
      <button
        class="bg-yellow-400 p-1 rounded-md"
        onClick={() => {
          handlePurchase(10)
        }}
      >
        Add a random item for 10 gold
      </button>
      <p class="" innerText={error()} />
    </div>
  )
}
