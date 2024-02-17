import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { type Inventory } from './types/inventory'
import { ShopDisplay } from './components/ShopDisplay'
import { InventoryDisplay } from './components/InventoryDisplay'
import { type Item } from './types/item'

const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    items: new Map<Item, number>(),
    gold: 70,
    maxSize: 12,
    get currentSize () {
      return [...this.items.keys()].length
    }
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-wrap w-full h-full p-4 gap-2">
        <div class="flex flex-col bg-blue-200 p-2 rounded-md w-80 h-fit">
          <ShopDisplay inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-col bg-red-200 p-2 rounded-md w-[28rem] h-fit">
          <InventoryDisplay inventory={inventory} />
        </div>
        <div class="flex flex-col bg-purple-200 p-2 rounded-md w-[32rem] h-fit">
          <AlchemyCircle inventory={inventory} setInventory={setInventory} />
        </div>
      </div>
    </div>
  )
}

export default App
