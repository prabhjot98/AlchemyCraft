import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { type Inventory } from './types/inventory'
import { ShopDisplay } from './components/ShopDisplay'
import { InventoryDisplay } from './components/InventoryDisplay'

const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    reagents: [],
    gold: 50
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-wrap w-full  h-full p-4 gap-2">
        <div class="flex flex-col bg-blue-200 p-2 rounded-md w-fit h-fit">{ShopDisplay(inventory, setInventory)}</div>
        <div class="flex flex-col bg-red-200 p-2 rounded-md w-fit h-fit">
          {InventoryDisplay(inventory)}
          {AlchemyCircle(inventory, setInventory)}
        </div>
      </div>
    </div>
  )
}

export default App
