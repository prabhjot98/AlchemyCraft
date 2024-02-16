import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { type Inventory } from './types/inventory'
import { ShopDisplay } from './components/ShopDisplay'
import { InventoryDisplay } from './components/InventoryDisplay'

const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    items: {},
    gold: 50
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-wrap w-full h-full p-4 gap-2">
        <div class="flex flex-col bg-blue-200 p-2 rounded-md min-w-80 w-fit h-fit">
          <ShopDisplay inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-col bg-red-200 p-2 rounded-md min-w-[28rem] w-fit h-fit">
          <InventoryDisplay inventory={inventory} />
          <AlchemyCircle inventory={inventory} setInventory={setInventory} />
        </div>
      </div>
    </div>
  )
}

export default App
