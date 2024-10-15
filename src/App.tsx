import { Toaster } from 'solid-toast'
import { Backpack } from './components/Backpack'
import { Confetti } from './components/Confetti'
import { CraftingCircle } from './components/CraftingCircle'
import { PlayerContext } from './player/player'

export const App = () => {
  return (
    <PlayerContext.Provider value={PlayerContext.defaultValue}>
      <Toaster gutter={0} position="top-right" />
      <Confetti />
      <div class="flex flex-col gap-2 w-screen h-screen bg-gradient-to-b from-[#58BEA4] to-[#DAC2A7] justify-center items-center overflow-y-auto">
        <CraftingCircle />
        <Backpack />
      </div>
    </PlayerContext.Provider>
  )
}
