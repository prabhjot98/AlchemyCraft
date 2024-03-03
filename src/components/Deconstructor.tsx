/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSignal, type JSXElement } from 'solid-js'
import { ItemSelector } from '../items/ItemSelector'
import { smallAirShard, smallEarthShard, smallFireShard, smallWaterShard, type Item } from '../items/items'
import { _addItem, usePlayer } from '../player/player'

export const Deconstructor = (): JSXElement => {
  const [selectedItem, setSelectedItem] = createSignal<Item | null>(null)
  const [error, setError] = createSignal<string>('')

  const [inventory, setInventory] = usePlayer()

  const addItem = _addItem(setInventory)

  const handleDeconstruct = (): void => {
    setError('')
    if (selectedItem() === null) {
      setError("You haven't selected an item to deconstruct!")
    }

    const totalFire = selectedItem()!.fireElement
    const totalWater = selectedItem()!.waterElement
    const totalEarth = selectedItem()!.earthElement
    const totalAir = selectedItem()!.airElement

    for (let i = 0; i < totalFire; i++) {
      addItem(smallFireShard)
    }
    for (let i = 0; i < totalWater; i++) {
      addItem(smallWaterShard)
    }
    for (let i = 0; i < totalEarth; i++) {
      addItem(smallEarthShard)
    }
    for (let i = 0; i < totalAir; i++) {
      addItem(smallAirShard)
    }

    setSelectedItem(null)
  }

  return (
    <div class="flex flex-col gap-2 bg-orange-200 h-[500px]">
      <h1 textContent="Deconstructor" />
      <ItemSelector
        items={inventory.items}
        setInventory={setInventory}
        selectedItem={selectedItem()}
        setSelectedItem={setSelectedItem}
      />
      {selectedItem() !== null && (
        <div class="flex flex-col gap-1">
          <button
            type="button"
            class="w-32 h-16 text-xl font-semibold bg-gray-300 rounded-md outline outline-gray-600
            hover:bg-blue-300 hover:outline-blue-600 active:bg-violet-300 active:outline-violet-600"
            onClick={() => {
              handleDeconstruct()
            }}
            textContent={'Deconstruct ' + selectedItem()!.type}
          />
          <div class={'flex flex-wrap gap-1 '}>
            <p textContent="You will get: " class="pr-1" />
            {selectedItem()!.fireElement > 0 && (
              <p class="text-red-600" textContent={selectedItem()!.fireElement + ' fire shards '} />
            )}
            {selectedItem()!.waterElement > 0 && (
              <p class="text-blue-600" textContent={selectedItem()!.waterElement + ' water shards '} />
            )}
            {selectedItem()!.earthElement > 0 && (
              <p class="text-amber-600" textContent={selectedItem()!.earthElement + ' earth shards '} />
            )}
            {selectedItem()!.airElement > 0 && (
              <p class="text-purple-600" textContent={selectedItem()!.airElement + ' air shards '} />
            )}
            <p textContent="when deconstructed" />
          </div>
        </div>
      )}
      <h4 innerText={error()} />
    </div>
  )
}
