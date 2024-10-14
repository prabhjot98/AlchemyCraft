/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createDroppable } from '@thisbeyond/solid-dnd'
import { Show, createSignal } from 'solid-js'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  findItem,
  isValidCraft,
  type ItemName
} from '../items/items'
import { addItem, setSlot, usePlayer } from './player'
import { ItemImg } from '../items/ItemIcon'
import { RecipeSelector, capitalizeWords } from '../recipes/RecipeSelector'
import { ElementDisplay } from '../items/ElementDisplay'
import toast from 'solid-toast'

const CraftingIcon = (props: { itemName: ItemName, slot: '1' | '2' | '3' | '4' }) => (
  <div
    class="size-16 relative"
    onClick={() => {
      addItem(props.itemName)
      setSlot(null, props.slot)
    }}
  >
    <ItemImg itemName={props.itemName} />
  </div>
)

export const CraftingCircle = () => {
  const droppable1 = createDroppable(1)
  const droppable2 = createDroppable(2)
  const droppable3 = createDroppable(3)
  const droppable4 = createDroppable(4)
  const [player] = usePlayer()
  const [isSpinning, setIsSpinning] = createSignal(false)
  const [isFailing, setIsFailing] = createSignal(false)

  const handleCraft = () => {
    const slot1 = player.slot1
    const slot2 = player.slot2
    const slot3 = player.slot3
    const slot4 = player.slot4
    const craft = player.selectedCraft

    setSlot(null, '1')
    setSlot(null, '2')
    setSlot(null, '3')
    setSlot(null, '4')

    if (slot1 === null || slot2 === null || slot3 === null || slot4 === null || craft == null) {
      if (slot1 !== null) addItem(slot1)
      if (slot2 !== null) addItem(slot2)
      if (slot3 !== null) addItem(slot3)
      if (slot4 !== null) addItem(slot4)
      toast.error('You need to add an item in every slot')
      setIsFailing(true)
      setTimeout(() => setIsFailing(false), 500)
      return
    }

    const result = isValidCraft(slot1, slot2, slot3, slot4, craft)

    if (!result) {
      addItem(slot1)
      addItem(slot2)
      addItem(slot3)
      addItem(slot4)
      setIsFailing(true)
      setTimeout(() => setIsFailing(false), 500)
      toast.error('You need to match the elements')
      return
    }

    toast(`Crafted ${capitalizeWords(craft)}`)
    addItem(craft)
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 500)
  }

  return (
    <div>
      <div class="relative size-96 items-center bg-white/50 bg-cover bg-center bg-[url('/assets/icons/circle.png')] mx-auto rounded">
        <div use:droppable1={droppable1} class="absolute top-4 left-40 size-16 rounded-[32px] bg-white">
          <Show when={player.slot1}>
            <CraftingIcon slot="1" itemName={player.slot1!} />
          </Show>
        </div>
        <div use:droppable2={droppable2} class="absolute right-4 top-40 size-16 rounded-[32px] bg-white">
          <Show when={player.slot2}>
            <CraftingIcon slot="2" itemName={player.slot2!} />
          </Show>
        </div>
        <div use:droppable3={droppable3} class="absolute bottom-4 left-40 size-16 rounded-[32px] bg-white">
          <Show when={player.slot3}>
            <CraftingIcon slot="3" itemName={player.slot3!} />
          </Show>
        </div>
        <div use:droppable4={droppable4} class="absolute top-40 left-4 size-16 rounded-[32px] bg-white">
          <Show when={player.slot4}>
            <CraftingIcon slot="4" itemName={player.slot4!} />
          </Show>
        </div>
        <Show when={player.selectedCraft}>
          <div
            class={`absolute top-[163px] left-[160px] ${isValidCraft(player.slot1, player.slot2, player.slot3, player.slot4, player.selectedCraft!) ? 'animate-shake hover:animate-pulse' : 'grayscale'}`}
            onClick={() => {
              handleCraft()
            }}
            role="button"
          >
            <ItemImg itemName={player.selectedCraft!} />
          </div>
        </Show>
        <Show when={player.selectedCraft}>
          <div class="absolute bg-gray-100 w-32 rounded top-[235px] mx-auto left-0 right-0">
            <div class="flex px-2 justify-center mx-auto">
              <span>Have:</span>
              {(() => {
                const i1 = player.slot1 !== null ? findItem(player.slot1) : null
                const i2 = player.slot2 !== null ? findItem(player.slot2) : null
                const i3 = player.slot3 !== null ? findItem(player.slot3) : null
                const i4 = player.slot4 !== null ? findItem(player.slot4) : null

                const totalFire = calcTotalFireElement(i1, i2, i3, i4)
                const totalWater = calcTotalWaterElement(i1, i2, i3, i4)
                const totalEarth = calcTotalEarthElement(i1, i2, i3, i4)
                const totalAir = calcTotalAirElement(i1, i2, i3, i4)
                return (
                  <ElementDisplay
                    fireElement={totalFire}
                    waterElement={totalWater}
                    earthElement={totalEarth}
                    airElement={totalAir}
                  />
                )
              })()}
            </div>
            <div class="flex px-2 justify-center mx-auto">
              <span>Need:</span>
              {(() => {
                const item = findItem(player.selectedCraft!)
                return (
                  <ElementDisplay
                    fireElement={item.fireElement}
                    waterElement={item.waterElement}
                    earthElement={item.earthElement}
                    airElement={item.airElement}
                  />
                )
              })()}
            </div>
          </div>
        </Show>
        <div class="absolute right-0 bottom-0 z-50">
          <RecipeSelector />
        </div>
      </div>
    </div>
  )
}
