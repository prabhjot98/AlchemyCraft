import { CraftingDisplay } from '../components/CraftingDisplay'
import { Deconstructor } from '../components/Deconstructor'
import { useModal } from '../components/Modal'
import { InventoryList } from '../inventory/InventoryList'
import { QuestDisplay } from '../quests/QuestDisplay'
import { RecipeList } from '../recipes/RecipeList'

export function ToolBar () {
  const setThingInModal = useModal()

  return (
    <div
      class="fixed bg-white/20 rounded-lg drop-shadow-2xl
      flex gap-2 z-40
      w-[250px] h-[50px] left-[50%] -translate-x-1/2 bottom-2 flex-row
      md:w-[100px] md:h-[600px] md:left-2 md:translate-x-0 md:bottom-auto md:top-[50%] md:-translate-y-1/2 md:flex-col"
    >
      <div class="m-auto flex flex-row md:flex-col gap-2">
        <div
          class="w-[64px] h-[64px] bg-orange-300"
          onClick={() => {
            setThingInModal(<InventoryList />)
          }}
        >
          Bag
        </div>
        <div
          class="w-[64px] h-[64px] bg-orange-300"
          onClick={() => {
            setThingInModal(<CraftingDisplay />)
          }}
        >
          Craft
        </div>
        <div
          class="w-[64px] h-[64px] bg-orange-300"
          onClick={() => {
            setThingInModal(<RecipeList />)
          }}
        >
          Recipes
        </div>
        <div
          class="w-[64px] h-[64px] bg-orange-300"
          onClick={() => {
            setThingInModal(<QuestDisplay />)
          }}
        >
          Quests
        </div>
        <div
          class="w-[64px] h-[64px] bg-orange-300"
          onClick={() => {
            setThingInModal(<Deconstructor />)
          }}
        >
          Deconstruct
        </div>
      </div>
    </div>
  )
}
