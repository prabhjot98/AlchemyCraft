/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createDroppable } from '@thisbeyond/solid-dnd'
import { Show, createSignal } from 'solid-js'
import { type ItemName } from '../items/items'
import { addItem, setSlot, usePlayer } from './player'
import { ItemImg } from '../items/ItemIcon'
import { isValidCraft } from './recipe'

const CraftingIcon = (props: { itemName: ItemName }) => (
  <div class="size-16 rounded relative ">
    <ItemImg itemName={props.itemName} />
  </div>
)

export const CraftingCircle = () => {
  const droppable1 = createDroppable(1)
  const droppable2 = createDroppable(2)
  const droppable3 = createDroppable(3)
  const [player] = usePlayer()
  const [isSpinning, setIsSpinning] = createSignal(false)
  const [isFailing, setIsFailing] = createSignal(false)

  const handleCraft = () => {
    const slot1 = player.slot1
    const slot2 = player.slot2
    const slot3 = player.slot3

    setSlot(null, '1')
    setSlot(null, '2')
    setSlot(null, '3')

    if (slot1 === null || slot2 === null || slot3 === null) {
      if (slot1 !== null) addItem(slot1)
      if (slot2 !== null) addItem(slot2)
      if (slot3 !== null) addItem(slot3)
      setIsFailing(true)
      setTimeout(() => setIsFailing(false), 500)
      return
    }

    const result = isValidCraft(slot1, slot2, slot3)

    if (result === false) {
      addItem(slot1)
      addItem(slot2)
      addItem(slot3)
      setIsFailing(true)
      setTimeout(() => setIsFailing(false), 500)
      return
    }
    addItem(result.result)
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 500)
  }

  return (
    <div class="flex justify-center w-96 h-96 items-center bg-white/50 mx-auto rounded">
      <div class="relative">
        <div
          class={`w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[260px] border-red-500 transition-transform duration-1000 ${isSpinning() ? 'rotate-360' : ''} ${isFailing() ? 'failed-craft' : ''} `}
        />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <img
            src="/assets/icons/pentagram.png"
            class="w-16 h-16 rounded-md hover:bg-blue-300"
            onClick={() => {
              handleCraft()
            }}
          />
        </div>
        <div
          use:droppable1={droppable1}
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded bg-white"
        >
          <Show when={player.slot1}>
            <CraftingIcon itemName={player.slot1!} />
          </Show>
        </div>
        <div
          use:droppable2={droppable2}
          class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 size-16 rounded bg-white"
        >
          <Show when={player.slot2}>
            <CraftingIcon itemName={player.slot2!} />
          </Show>
        </div>
        <div
          use:droppable3={droppable3}
          class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 size-16 rounded bg-white"
        >
          <Show when={player.slot3}>
            <CraftingIcon itemName={player.slot3!} />
          </Show>
        </div>
      </div>
    </div>
  )
}
