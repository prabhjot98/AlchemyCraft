/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, _removeItem, type Inventory } from '../inventory/inventory'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  type Item
} from '../items/items'
import { ItemSelector } from '../items/ItemSelector'
import { RecipeDisplay } from '../recipes/RecipeDisplay'
import { fireShard2, type Recipe } from '../recipes/recipes'
import { RecipeSelector } from '../recipes/RecipeSelector'
import { ElementDisplay } from './ElementDisplay'

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

  const handleCraft = (): void => {
    setError('')
    if (firstSelectedOption() === null || secondSelectedOption() === null || thirdSelectedOption() === null) {
      setError("You haven't selected an item in every slot!")
      return
    }

    if (
      totalFireElement() >= selectedRecipe().fireElement &&
      totalWaterElement() >= selectedRecipe().waterElement &&
      totalEarthElement() >= selectedRecipe().earthElement &&
      totalAirElement() >= selectedRecipe().airElement
    ) {
      addItem(selectedRecipe())

      if ((props.inventory.items.get(firstSelectedOption()!) ?? 0) === 0) {
        setFirstSelectedOption(null)
      } else {
        removeItem(firstSelectedOption()!)
      }
      if ((props.inventory.items.get(secondSelectedOption()!) ?? 0) === 0) {
        setSecondSelectedOption(null)
      } else {
        removeItem(secondSelectedOption()!)
      }
      if ((props.inventory.items.get(thirdSelectedOption()!) ?? 0) === 0) {
        setThirdSelectedOption(null)
      } else {
        removeItem(thirdSelectedOption()!)
      }
    } else {
      setError("You don't have enough elements to craft this item!")
    }
  }

  return (
    <div class="flex flex-col gap-2 w-full h-full">
      <h1 textContent="Crafting" />
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
