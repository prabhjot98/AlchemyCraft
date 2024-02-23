import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { Deconstructor } from './components/Deconstructor'
import { QuestDisplay } from './quests/QuestDisplay'
import { GeneratorContainer } from './generators/GeneratorContainer'
import { ShardRockDisplay } from './generators/ShardRockDisplay'
import { InventoryDisplay } from './inventory/InventoryDisplay'
import { type Inventory } from './inventory/inventory'
import { type Item } from './items/items'

export const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    items: new Map<Item, number>(),
    gold: 0,
    maxSize: 15,
    get currentSize () {
      return [...this.items.keys()].length
    },
    machines: [],
    completedQuests: []
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-wrap w-fit h-fit p-2 gap-2">
        <div class="flex flex-col bg-blue-200 p-2 rounded-md w-80 h-fit">
          <QuestDisplay inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-wrap bg-amber-200 p-2 rounded-md w-80 gap-2 h-fit">
          <ShardRockDisplay inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-col bg-red-200 p-2 rounded-md w-[28rem] h-fit">
          <InventoryDisplay inventory={inventory} />
        </div>
        <div class="flex flex-col bg-purple-200 p-2 rounded-md w-[32rem] h-fit">
          <AlchemyCircle inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-col bg-orange-200 p-2 rounded-md w-[32rem] h-fit">
          <Deconstructor inventory={inventory} setInventory={setInventory} />
        </div>
        <div class="flex flex-col bg-pink-200 p-2 rounded-md w-[32rem] h-fit">
          <GeneratorContainer inventory={inventory} setInventory={setInventory} />
        </div>
      </div>
    </div>
  )
}
