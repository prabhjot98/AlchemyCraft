/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSignal, type JSXElement } from 'solid-js'
import { ElementDisplay } from '../items/ElementDisplay'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  type Item
} from '../items/items'
import { ItemSelector } from '../items/ItemSelector'
import { _addItem, _removeItem, usePlayer } from '../player/player'
import { STARTER_ITEMS } from '../items/items'

export const CraftingDisplay = (): JSXElement => {
  const [firstSelectedOption, setFirstSelectedOption] = createSignal<Item | null>(null)
  const [secondSelectedOption, setSecondSelectedOption] = createSignal<Item | null>(null)
  const [thirdSelectedOption, setThirdSelectedOption] = createSignal<Item | null>(null)

  const [inventory, setInventory] = usePlayer()

  const totalFireElement = (): number =>
    calcTotalFireElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalWaterElement = (): number =>
    calcTotalWaterElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalEarthElement = (): number =>
    calcTotalEarthElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalAirElement = (): number =>
    calcTotalAirElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const addItem = _addItem(setInventory)
  const removeItem = _removeItem(setInventory)

  const [error, setError] = createSignal<string>('')

  // returns the first recipe with the given elements [fire, water, earth, air]
  // returns null if a match cannot be found
  const getRecipeWithElements = (elements: number[]): Item => {
    for (let i = 0; i < STARTER_ITEMS.length; i++) {
      if (
        elements[0] === STARTER_ITEMS[i].fireElement &&
        elements[1] === STARTER_ITEMS[i].waterElement &&
        elements[2] === STARTER_ITEMS[i].earthElement &&
        elements[3] === STARTER_ITEMS[i].airElement
      ) {
        return STARTER_ITEMS[i]
      }
    }
    return { type: '???', tier: 0, fireElement: 0, waterElement: 0, earthElement: 0, airElement: 0 }
  }

  const getAllElements = () => {
    return [totalFireElement(), totalWaterElement(), totalEarthElement(), totalAirElement()]
  }
  const handleCraft = (): void => {
    setError('')
    if (firstSelectedOption() === null || secondSelectedOption() === null || thirdSelectedOption() === null) {
      setError("You haven't selected an item in every slot!")
      return
    }

    const selectedRecipe = getRecipeWithElements(getAllElements())
    if (selectedRecipe.type !== '???') {
      addItem(selectedRecipe)

      if ((inventory.items.get(firstSelectedOption()!) ?? 0) === 0) {
        setFirstSelectedOption(null)
      } else {
        removeItem(firstSelectedOption()!)
      }
      if ((inventory.items.get(secondSelectedOption()!) ?? 0) === 0) {
        setSecondSelectedOption(null)
      } else {
        removeItem(secondSelectedOption()!)
      }
      if ((inventory.items.get(thirdSelectedOption()!) ?? 0) === 0) {
        setThirdSelectedOption(null)
      } else {
        removeItem(thirdSelectedOption()!)
      }
    } else {
      setError('You need to match the elements exactly to craft this item!')
    }
  }

  return (
    <div class="flex flex-col gap-2 p-2 bg-gray-200 w-full h-full">
      <h1 textContent="Crafting" />
      <div class="flex flex-col gap-4 justify-center">
        <ItemSelector
          items={inventory.items}
          setInventory={setInventory}
          selectedItem={firstSelectedOption()}
          setSelectedItem={setFirstSelectedOption}
        />
        <ItemSelector
          items={inventory.items}
          setInventory={setInventory}
          selectedItem={secondSelectedOption()}
          setSelectedItem={setSecondSelectedOption}
        />
        <ItemSelector
          items={inventory.items}
          setInventory={setInventory}
          selectedItem={thirdSelectedOption()}
          setSelectedItem={setThirdSelectedOption}
        />
        <button
          type="button"
          class="w-32 h-16 text-xl font-semibold bg-gray-300 "
          onClick={() => {
            handleCraft()
          }}
          value="craft"
          textContent={'Craft ' + getRecipeWithElements(getAllElements()).type}
        />
        <div>
          <p innerText="Total Elements: " />
          <ElementDisplay
            fireElement={totalFireElement()}
            waterElement={totalWaterElement()}
            earthElement={totalEarthElement()}
            airElement={totalAirElement()}
          />
        </div>
        <h4 innerText={error()} />
      </div>
    </div>
  )
}
