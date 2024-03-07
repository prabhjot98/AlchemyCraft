import { CraftingDisplay } from '../components/CraftingDisplay'
import { Deconstructor } from '../components/Deconstructor'
import { useModal } from '../components/Modal'
import { InventoryList } from '../inventory/InventoryList'
import { levelUp, usePlayer } from '../player/player'
import { QuestDisplay } from '../quests/QuestDisplay'
import { RecipeList } from '../recipes/RecipeList'

export function ToolBar () {
  const setThingInModal = useModal()
  const [, setPlayer] = usePlayer()

  return (
    <div
      class="fixed bg-white/20 rounded-lg drop-shadow-2xl
      flex gap-2 z-40
      w-[250px] h-[50px] left-[50%] -translate-x-1/2 bottom-2 flex-row
      md:w-[100px] md:h-[600px] md:left-2 md:translate-x-0 md:bottom-auto md:top-[50%] md:-translate-y-1/2 md:flex-col"
    >
      <div class="m-auto flex flex-row md:flex-col gap-2">
        <img
          src="/assets/icons/backpack.png"
          class="w-16 h-16 rounded-md hover:bg-blue-300"
          onClick={() => {
            setThingInModal(<InventoryList />)
          }}
        />
        <img
          src="/assets/icons/pentagram.png"
          class="w-16 h-16 rounded-md hover:bg-blue-300"
          onClick={() => {
            setThingInModal(<CraftingDisplay />)
          }}
        />
        <img
          src="/assets/icons/recipe_book.png"
          class="w-16 h-16 rounded-md hover:bg-blue-300"
          onClick={() => {
            setThingInModal(<RecipeList />)
          }}
        />
        <img
          src="/assets/icons/quest_log.png"
          class="w-16 h-16 rounded-md hover:bg-blue-300"
          onClick={() => {
            setThingInModal(<QuestDisplay />)
          }}
        />
        <div
          class="w-16 h-16 rounded-md bg-orange-300 break-all hover:bg-blue-300"
          onClick={() => {
            setThingInModal(<Deconstructor />)
          }}
        >
          Deconstruct
        </div>
        <div
          class="w-16 h-16 rounded-md bg-orange-300 hover:bg-blue-300"
          onClick={() => {
            levelUp(setPlayer)
          }}
        >
          lvl up
        </div>
      </div>
    </div>
  )
}
