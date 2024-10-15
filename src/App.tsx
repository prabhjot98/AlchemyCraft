import { PlayerContext } from './player/player'
import { ModalContext } from './components/Modal'
import { Toaster } from 'solid-toast'
import { CraftingCircle } from './player/CraftingCircle'
import { Backpack } from './player/Backpack'
import { Confetti } from './components/Confetti'

export const App = () => {
  return (
    <PlayerContext.Provider value={PlayerContext.defaultValue}>
      <Toaster gutter={0} position="top-right" />
      <ModalContext.Provider value={undefined}>
        <Confetti />
        <div class="flex flex-col gap-2 w-screen h-screen bg-gradient-to-b from-[#58BEA4] to-[#DAC2A7] justify-center items-center overflow-y-auto">
          <CraftingCircle />
          <Backpack />
        </div>
      </ModalContext.Provider>
    </PlayerContext.Provider>
  )
}
