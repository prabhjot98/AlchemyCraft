import { For, type JSXElement, createSignal, type Setter } from 'solid-js'
import { ItemDisplay } from './ItemDisplay'
import { type SetStoreFunction } from 'solid-js/store'
import { _removeItem, type Player } from '../player/player'
import { type Seed } from './seeds'

export const SeedSelector = (props: {
  items: Map<Seed, number>
  setInventory: SetStoreFunction<Player>
  setSelectedItem: Setter<Seed | null>
}): JSXElement => {
  const [, setModalIsOpen] = createSignal(false)

  const removeItem = _removeItem(props.setInventory)

  const handleItemSelected = (i: Seed): void => {
    removeItem(i)
    props.setSelectedItem(i)
    setModalIsOpen(false)
  }

  return (
    <div class="flex flex-row gap-2 align-middle">
      <button
        class="bg-gray-200 p-1 rounded-md border border-black"
        onClick={() => setModalIsOpen(true)}
        innerText="Select a seed"
      />
      <div class="absolute bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-80 h-fit z-10">
        <button
          class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
          onClick={() => setModalIsOpen(false)}
          innerText="X"
        />
        {[...props.items.keys()].length === 0 && <p class="text-xl" innerText="Nothing in your inventory" />}
        <For each={[...props.items.keys()]}>
          {(i) => (
            <ItemDisplay
              item={i}
              count={props.items.get(i) ?? 0}
              onClick={() => {
                handleItemSelected(i)
              }}
            />
          )}
        </For>
      </div>
    </div>
  )
}
