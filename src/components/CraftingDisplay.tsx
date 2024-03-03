/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSignal, type JSXElement } from 'solid-js'
import { _addItem, _removeItem, usePlayer } from '../player/player'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  type Item
} from '../items/items'
import { ItemSelector } from '../items/ItemSelector'
import { RecipeDisplay } from '../recipes/RecipeDisplay'
import { mediumFireShard, type Recipe } from '../recipes/recipes'
import { RecipeSelector } from '../recipes/RecipeSelector'
import { ElementDisplay } from '../items/ElementDisplay'

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

  const [selectedRecipe, setSelectedRecipe] = createSignal<Recipe>(mediumFireShard)

  const [error, setError] = createSignal<string>('')

  const handleCraft = (): void => {
    setError('')
    if (firstSelectedOption() === null || secondSelectedOption() === null || thirdSelectedOption() === null) {
      setError("You haven't selected an item in every slot!")
      return
    }

    if (
      totalFireElement() === selectedRecipe().fireElement &&
      totalWaterElement() === selectedRecipe().waterElement &&
      totalEarthElement() === selectedRecipe().earthElement &&
      totalAirElement() === selectedRecipe().airElement
    ) {
      addItem(selectedRecipe())

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
          textContent={'Craft ' + selectedRecipe().type}
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
      <RecipeDisplay recipe={selectedRecipe()} />
      <RecipeSelector selectedRecipe={selectedRecipe()} setSelectedRecipe={setSelectedRecipe} />
    </div>
  )
}
