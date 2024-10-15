import { type Engine, tsParticles } from '@tsparticles/engine'
import Particles from '@tsparticles/solid'
import { loadFull } from 'tsparticles'
import { type Resource, Show, createResource } from 'solid-js'
import { usePlayer } from '../player/player'

const config = {
  fullScreen: {
    zIndex: 1
  },
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ['#00FFFC', '#FC00FF', '#fffc00']
    },
    shape: {
      type: ['circle', 'square'],
      options: {}
    },
    opacity: {
      value: {
        min: 0,
        max: 1
      },
      animation: {
        enable: true,
        speed: 2,
        startValue: 'max',
        destroy: 'min'
      }
    },
    size: {
      value: {
        min: 2,
        max: 4
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 10
      },
      speed: {
        min: 10,
        max: 20
      },
      decay: 0.1,
      direction: 'none',
      straight: false,
      outModes: {
        default: 'destroy',
        top: 'none'
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: 'random',
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: 'random',
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: {
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 150
    },
    size: {
      width: 0,
      height: 0
    }
  }
}

function initParticlesEngine (cb: (engine: Engine) => Promise<void>): Resource<true> {
  tsParticles.init()
  const [resource] = createResource(async () => await cb(tsParticles).then(() => true as const))
  return resource
}

export const Confetti = () => {
  const init = initParticlesEngine(loadFull)
  const [player] = usePlayer()
  const wonGame = () => player.unlockedItems.some((i) => i === "philosopher's stone")

  const showParticles = () => wonGame() && init()

  return (
    <Show when={showParticles()}>
      <Particles className="absolute" id="tsparticles" options={config} />
    </Show>
  )
}
