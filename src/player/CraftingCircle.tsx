/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createDroppable } from '@thisbeyond/solid-dnd'
import { Show } from 'solid-js'
import { type ItemName } from '../items/items'
import { usePlayer } from './player'
import { ItemImg } from '../items/ItemIcon'

const CraftingIcon = (props: { itemName: ItemName }) => {
  return (
    <div class="size-16 rounded relative bg-white/50 ">
      <ItemImg itemName={props.itemName} />
    </div>
  )
}

export const CraftingCircle = () => {
  const slot1 = createDroppable(1)
  const slot2 = createDroppable(2)
  const slot3 = createDroppable(3)
  const [player] = usePlayer()

  const s1 = () => player.slot1

  return (
    <div class="flex flex-col gap-8 w-96 h-fit bg-white/50 mx-auto rounded">
      Craft here
      <div use:slot1={slot1} id="1" class="size-24 rounded bg-white/50">
        Slot 1
        <Show when={player.slot1}>
          <CraftingIcon itemName={player.slot1!} />
        </Show>
      </div>
      <div use:slot2={slot2} id="2" class="size-24 rounded bg-white/50">
        Slot 2
        <Show when={player.slot2}>
          <CraftingIcon itemName={player.slot2!} />
        </Show>
      </div>
      <div use:slot3={slot3} id="3" class="size-24 rounded bg-white/50">
        Slot 3
        <Show when={player.slot3}>
          <CraftingIcon itemName={player.slot3!} />
        </Show>
      </div>
    </div>
  )
}
