import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { type Inventory } from './types/inventory'
import { REAGENTS, randomReagent } from './types/reagents'
import { ShopDisplay } from './components/ShopDisplay'
import { InventoryDisplay } from './components/InventoryDisplay'

const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    reagents: [
      randomReagent(REAGENTS),
      randomReagent(REAGENTS),
      randomReagent(REAGENTS),
      randomReagent(REAGENTS),
      randomReagent(REAGENTS)
    ],
    gold: 20
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-row w-full  h-full p-4 gap-2">
        <div class="flex flex-col w-1/2">{ShopDisplay(inventory, setInventory)}</div>
        <div class="flex flex-col w-1/2">
          {InventoryDisplay(inventory)}
          {AlchemyCircle(inventory, setInventory)}
        </div>
      </div>
    </div>
  )
}

export default App
