/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CraftingCircle } from './player/CraftingCircle'
import { Backpack } from './player/Backpack'
import { Mine } from './player/mine'

export const Game = () => {
  return (
    <div class="flex flex-col gap-2 w-screen h-screen bg-gradient-to-b from-[#58BEA4] to-[#DAC2A7]">
      <Mine />
      <CraftingCircle />
      <Backpack />
    </div>
  )
}
