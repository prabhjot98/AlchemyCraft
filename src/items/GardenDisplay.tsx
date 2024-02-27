/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createEffect, createSignal, For, type JSXElement } from 'solid-js'
import { type Seed } from './seeds'
import { type Inventory } from '../inventory/inventory'
import { createStore, type SetStoreFunction } from 'solid-js/store'
import { SeedSelector } from './SeedSelector'
import { ShardGenerator } from '../generators/ShardGenerator'

export const GardenDisplay = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  const [garden, setGarden] = createStore<Seed[]>([])

  const [selectedSeed, setSelectedSeed] = createSignal<Seed | null>(null)

  const seeds = (): Map<Seed, number> => {
    const m = new Map()
    for (const [item, quantity] of props.inventory.items) {
      if ((item as Seed)?.grows !== undefined) {
        m.set(item as Seed, quantity)
      }
    }
    return m
  }

  createEffect(() => {
    setGarden((s) => {
      const newGarden = [...s]
      newGarden.push(selectedSeed()!)
      return newGarden
    })
  })

  return (
    <div class="flex flex-col gap-2">
      <h1 textContent="Garden" />
      <SeedSelector items={seeds()} setInventory={props.setInventory} setSelectedItem={setSelectedSeed} />
      <div class="flex flex-wrap gap-2">
        <For each={garden.filter((s) => s !== null)}>
          {(seed) => <ShardGenerator setInventory={props.setInventory} shard={seed.grows} duration={1000 * 10} />}
        </For>
      </div>
    </div>
  )
}
