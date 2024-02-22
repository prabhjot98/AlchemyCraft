import { type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { AlchemyCircle } from './components/AlchemyCircle'
import { GeneratorContainer } from './components/GeneratorContainer'
import { Deconstructor } from './components/Deconstructor'
import { InventoryDisplay } from './components/InventoryDisplay'
import { type Inventory } from './types/inventory'
import { type Item } from './types/items'
import { ShardRockDisplay } from './components/ShardRockDisplay'
import { QuestDisplay } from './components/QuestDisplay'

export const App: Component = () => {
  const [inventory, setInventory] = createStore<Inventory>({
    items: new Map<Item, number>(),
    gold: 0,
    maxSize: 15,
    get currentSize () {
      return [...this.items.keys()].length
    },
    machines: []
  })

  return (
    <div class="w-screen h-screen flex bg-gray-200">
      <div class="flex flex-wrap w-fit h-fit p-2 gap-2">
      <svg width="892" height="679" viewBox="0 0 892 679" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="892" height="679" fill="white"/>
<circle cx="446" cy="339" r="256" stroke="black" stroke-width="8"/>
<circle cx="446" cy="339" r="329" stroke="black" stroke-width="8"/>
<path d="M231.226 463L446 91L660.774 463H231.226Z" stroke="black" stroke-width="8"/>
<path d="M489.301 364L446 289L402.699 364L489.301 364Z" stroke="black" stroke-width="8"/>
<path d="M343.809 280L446 457L548.191 280L343.809 280Z" stroke="black" stroke-width="8"/>
<path d="M446.04 93.6155V286.837" stroke="black" stroke-width="8" stroke-linecap="round"/>
<path d="M489 363L655.734 460.643" stroke="black" stroke-width="8" stroke-linecap="round"/>
<path d="M402.335 364L235 460.611" stroke="black" stroke-width="8" stroke-linecap="round"/>
</svg>
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
