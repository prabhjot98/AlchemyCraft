import { For, type JSXElement } from 'solid-js'
import { PlayerContext, usePlayer } from './player/player'
import { ShardRock, ShardRockType } from './generators/ShardRock'
import { Modal, ModalContext } from './components/Modal'
import { ToolBar } from './toolbar/Toolbar'
import { Toaster } from 'solid-toast'
import { ShardGenerator } from './generators/ShardGenerator'
import { ExperienceBar } from './hud/ExperienceBar'

function Container (props: { children: JSXElement }) {
  return <div class="bg-red-300 w-16 h-16 md:w-32 md:h-32">{props.children}</div>
}

export const App = () => {
  const [player] = usePlayer()
  return (
    <PlayerContext.Provider value={PlayerContext.defaultValue}>
      <Toaster />
      <ModalContext.Provider value={undefined}>
        <Modal />
        <div class="flex w-screen h-screen bg-gradient-to-b from-[#58BEA4] to-[#DAC2A7]">
          <ToolBar />
          <ExperienceBar />
          <div class="flex flex-wrap gap-2 max-h-[80%] max-w-[80%] m-auto justify-center">
            <Container>
              <ShardRock shardRockType={ShardRockType.FIRE} />
            </Container>
            <Container>
              <ShardRock shardRockType={ShardRockType.WATER} />
            </Container>
            <Container>
              <ShardRock shardRockType={ShardRockType.EARTH} />
            </Container>
            <Container>
              <ShardRock shardRockType={ShardRockType.AIR} />
            </Container>
            <For each={player.machines}>
              {(generator) => (
                <Container>
                  <ShardGenerator duration={10000} shard={generator.type} />
                </Container>
              )}
            </For>
          </div>
        </div>
      </ModalContext.Provider>
    </PlayerContext.Provider>
  )
}
