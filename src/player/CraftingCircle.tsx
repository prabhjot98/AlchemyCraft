import { Show } from 'solid-js'
import { isValidCraft } from '../items/items'
import { clearCircle, removeFromCircle, unlockItem, usePlayer } from './player'
import { ItemImg } from '../items/ItemIcon'
import { BlurryItemImg, RecipeSelector, capitalizeWords } from '../recipes/RecipeSelector'
import toast from 'solid-toast'

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
      <div class="relative size-96 items-center bg-white/50 bg-cover bg-center bg-[url('/assets/icons/circle.png')] mx-auto rounded">
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
            class={`absolute border-black rounded-[32px] bg-white top-[163px] left-[160px] ${isValidCraft() ? 'animate-shake hover:animate-pulse' : 'grayscale'}`}
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
        </Show>
        <div class="absolute right-0 bottom-0">
          <RecipeSelector />
        </div>
      </div>
    </div>
  )
}
