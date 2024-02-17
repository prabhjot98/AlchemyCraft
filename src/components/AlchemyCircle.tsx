/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { For, createEffect, createSignal, type JSXElement, type Setter } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, _removeItem, type Inventory } from '../types/inventory'
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
  const removeItem = _removeItem(props.setInventory)

  const [selectedRecipe, setSelectedRecipe] = createSignal<Recipe>(fireShard2)

  const [error, setError] = createSignal<string>('')

  const [options, setOptions] = createSignal(Object.keys(props.inventory.items).map((obj) => JSON.parse(obj)))

  createEffect(() => setOptions(Object.keys(props.inventory.items).map((obj) => JSON.parse(obj))))

  const handleOptionSelected = (
    selectedOption: string,
    previousReagent: Item | null,
    setter: Setter<Item | null>
  ): void => {
    const selectedReagent = JSON.parse(selectedOption) as Item
    removeItem(selectedReagent)
    setter(selectedReagent)

    if (previousReagent !== null) {
      addItem(previousReagent)
    }
  }

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
      <div class="flex flex-col gap-4 justify-center">
        <select
          class="w-32"
          id="component 1"
          onChange={(e) => {
            handleOptionSelected(e.target.value, firstSelectedOption(), setFirstSelectedOption)
          }}
        >
          <option selected disabled textContent="Pick a reagent" />
          {firstSelectedOption() != null && props.inventory.items.get(firstSelectedOption()!) === undefined && (
            <option selected value={JSON.stringify(firstSelectedOption())} textContent={firstSelectedOption()?.type} />
          )}
          <For each={options()} children={(item) => <option value={JSON.stringify(item)} textContent={item.type} />} />
        </select>
        <select
          id="component 2"
          class="w-32"
          onChange={(e) => {
            handleOptionSelected(e.target.value, secondSelectedOption(), setSecondSelectedOption)
          }}
        >
          <option selected disabled textContent="Pick a reagent" />
          {secondSelectedOption() != null && props.inventory.items.get(secondSelectedOption()!) === undefined && (
            <option
              selected
              value={JSON.stringify(secondSelectedOption())}
              textContent={secondSelectedOption()?.type}
            />
          )}
          <For each={options()} children={(item) => <option value={JSON.stringify(item)} textContent={item.type} />} />
        </select>
        <select
          id="component 3"
          class="w-32"
          onChange={(e) => {
            handleOptionSelected(e.target.value, thirdSelectedOption(), setThirdSelectedOption)
          }}
        >
          <option selected disabled textContent="Pick a reagent" />
          {thirdSelectedOption() != null && props.inventory.items.get(thirdSelectedOption()!) === undefined && (
            <option selected value={JSON.stringify(thirdSelectedOption())} textContent={thirdSelectedOption()?.type} />
          )}
          <For each={options()} children={(item) => <option value={JSON.stringify(item)} textContent={item.type} />} />
        </select>
        <button
          type="button"
          class="w-32 h-16 bg-gray-300 rounded-md outline outline-gray-600
            hover:bg-blue-300 hover:outline-blue-600 active:bg-violet-300 active:outline-violet-600"
          onClick={() => {
            handleCraft()
          }}
          value="craft"
          textContent="Craft"
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
        <p innerText={error()} />
      </div>
      <RecipeDisplay recipe={selectedRecipe()} />
      <RecipeSelector selectedRecipe={selectedRecipe()} setSelectedRecipe={setSelectedRecipe} />
    </div>
  )
}
