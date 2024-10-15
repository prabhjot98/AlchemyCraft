import { Show, createMemo } from 'solid-js'
import toast from 'solid-toast'
import { ElementDisplay } from '../items/ElementDisplay'
import { ItemImg } from '../items/ItemIcon'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  findItem,
  isValidCraft
} from '../player/items'
import { clearCircle, removeFromCircle, unlockItem, usePlayer } from '../player/player'
import { BlurryItemImg, RecipeSelector, capitalizeWords } from './RecipeSelector'

const ElementsReq = () => {
  const [player] = usePlayer()

  const items = createMemo(() => player.craftingCircle.map(findItem))
  const totalFire = () => calcTotalFireElement(...items())
  const totalWater = () => calcTotalWaterElement(...items())
  const totalEarth = () => calcTotalEarthElement(...items())
  const totalAir = () => calcTotalAirElement(...items())

  return (
    <div class="flex flex-col w-32 bg-white items-center justify-center rounded border border-black">
      <div class="flex gap-1 text-sm">
        <span>Have </span>
        <ElementDisplay
          fireElement={totalFire()}
          waterElement={totalWater()}
          earthElement={totalEarth()}
          airElement={totalAir()}
        />
      </div>
      <div class="flex gap-1 text-sm">
        <span>Need </span>
        <ElementDisplay
          fireElement={findItem(player.selectedCraft!).fireElement}
          waterElement={findItem(player.selectedCraft!).waterElement}
          earthElement={findItem(player.selectedCraft!).earthElement}
          airElement={findItem(player.selectedCraft!).airElement}
        />
      </div>
    </div>
  )
}

const CraftingIcon = (props: { slot: 0 | 1 | 2 | 3 }) => {
  const [player] = usePlayer()
  const itemName = () => player.craftingCircle[props.slot]

  return (
    <Show when={itemName()}>
      <div
        class="size-16 relative"
        onClick={() => {
          removeFromCircle(props.slot)
        }}
      >
        <ItemImg itemName={itemName()} />
      </div>
    </Show>
  )
}

export const CraftingCircle = () => {
  const [player] = usePlayer()

  const handleCraft = () => {
    const slot1 = player.craftingCircle[0]
    const slot2 = player.craftingCircle[1]
    const slot3 = player.craftingCircle[2]
    const slot4 = player.craftingCircle[3]
    const craft = player.selectedCraft

    if (!slot1 || !slot2 || !slot3 || !slot4 || !craft) {
      toast.error('You need to add an item in every slot')
      return
    }

    const result = isValidCraft()

    if (!result) {
      toast.error('You need to match the elements')
      return
    }

    clearCircle()
    // setPlayer('selectedCraft', null)
    toast(`Crafted ${capitalizeWords(craft)}`)
    unlockItem(craft)
  }

  const isUnlocked = player.unlockedItems.find((i) => i === player.selectedCraft)

  return (
    <div>
      <div class="relative size-96 items-center bg-white/50 bg-cover bg-center bg-[url('/assets/icons/circle.png')] mx-auto rounded drop-shadow-2xl">
        <div class="absolute top-4 left-40 size-16 rounded-[32px] bg-white">
          <CraftingIcon slot={0} />
        </div>
        <div class="absolute right-4 top-40 size-16 rounded-[32px] bg-white">
          <CraftingIcon slot={1} />
        </div>
        <div class="absolute bottom-4 left-40 size-16 rounded-[32px] bg-white">
          <CraftingIcon slot={2} />
        </div>
        <div class="absolute top-40 left-4 size-16 rounded-[32px] bg-white">
          <CraftingIcon slot={3} />
        </div>
        <Show when={player.selectedCraft}>
          <div
            class={`absolute rounded-[32px] bg-white top-[163px] left-[160px] ${isValidCraft() ? 'animate-shake hover:animate-pulse' : 'grayscale'}`}
            onClick={() => {
              handleCraft()
            }}
            role="button"
          >
            <Show when={isUnlocked}>
              <ItemImg itemName={player.selectedCraft!} />
            </Show>
            <Show when={!isUnlocked}>
              <BlurryItemImg itemName={player.selectedCraft!} />
            </Show>
          </div>
          <div class="absolute top-[240px] left-[130px] mx-auto">
            <ElementsReq />
          </div>
        </Show>
        <div class="absolute right-0 bottom-0">
          <RecipeSelector />
        </div>
      </div>
    </div>
  )
}
