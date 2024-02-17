/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, type Inventory } from '../types/inventory'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  type Item
} from '../types/item'
import { fireShard2, type Recipe } from '../types/recipes'
import { ElementDisplay } from './ElementDisplay'
import { RecipeDisplay } from './RecipeDisplay'
import { RecipeSelector } from './RecipeSelector'
import { ItemSelector } from './ItemSelector'

export const AlchemyCircle = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
}): JSXElement => {
  const [firstSelectedOption, setFirstSelectedOption] = createSignal<Item | null>(null)
  const [secondSelectedOption, setSecondSelectedOption] = createSignal<Item | null>(null)
  const [thirdSelectedOption, setThirdSelectedOption] = createSignal<Item | null>(null)

  const totalFireElement = (): number =>
    calcTotalFireElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalWaterElement = (): number =>
    calcTotalWaterElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalEarthElement = (): number =>
    calcTotalEarthElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const totalAirElement = (): number =>
    calcTotalAirElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption())

  const addItem = _addItem(props.setInventory)

  const [selectedRecipe, setSelectedRecipe] = createSignal<Recipe>(fireShard2)

  const [error, setError] = createSignal<string>('')

  const handleCraft = (): void => {
    setError('')
    if (firstSelectedOption() === null || secondSelectedOption() === null || thirdSelectedOption() === null) {
      setError("You haven't selected a reagent in every slot!")
      return
    }

    if (
      totalFireElement() >= selectedRecipe().fireElement &&
      totalWaterElement() >= selectedRecipe().waterElement &&
      totalEarthElement() >= selectedRecipe().earthElement &&
      totalAirElement() >= selectedRecipe().airElement
    ) {
      addItem(selectedRecipe())

      setFirstSelectedOption(null)
      setSecondSelectedOption(null)
      setThirdSelectedOption(null)
    } else {
      setError("You don't have enough elements to craft this item!")
    }
  }

  return (
    <div>
      <p class="text-4xl font-bold" textContent="Crafting" />
      <div class="flex flex-col gap-4 justify-center">
        <ItemSelector
          items={props.inventory.items}
          setInventory={props.setInventory}
          selectedItem={firstSelectedOption()}
          setSelectedItem={setFirstSelectedOption}
        />
        <ItemSelector
          items={props.inventory.items}
          setInventory={props.setInventory}
          selectedItem={secondSelectedOption()}
          setSelectedItem={setSecondSelectedOption}
        />
        <ItemSelector
          items={props.inventory.items}
          setInventory={props.setInventory}
          selectedItem={thirdSelectedOption()}
          setSelectedItem={setThirdSelectedOption}
        />
        <button
          type="button"
          class="w-32 h-16 text-xl font-semibold bg-gray-300 rounded-md outline outline-gray-600
            hover:bg-blue-300 hover:outline-blue-600 active:bg-violet-300 active:outline-violet-600"
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
        <p class="text-2xl font-bold" innerText={error()} />
      </div>
      <RecipeDisplay recipe={selectedRecipe()} />
      <RecipeSelector selectedRecipe={selectedRecipe()} setSelectedRecipe={setSelectedRecipe} />
    </div>
  )
}
