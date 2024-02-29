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
import { mediumFireShard, type Recipe } from '../recipes/recipes'
import { RecipeSelector } from '../recipes/RecipeSelector'
import { ElementDisplay } from './ElementDisplay'
import { RECIPES } from '../recipes/recipes'

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

  const [selectedRecipe, setSelectedRecipe] = createSignal<Recipe>(mediumFireShard)

  const [error, setError] = createSignal<string>('')

  // returns the first recipe with the given elements [fire, water, earth, air]
  // returns null if a match cannot be found
  const getRecipeWithElements = (elements: number[]): Item => {
    for (var i=0; i<RECIPES.length; i++){
      if (
        elements[0] === RECIPES[i].fireElement &&
        elements[1] === RECIPES[i].waterElement &&
        elements[2] === RECIPES[i].earthElement &&
        elements[3] === RECIPES[i].airElement
      ) {
        return RECIPES[i]
      }
    }
    return {type: "???", fireElement: 0, waterElement: 0, earthElement: 0, airElement: 0}
  }

  const getAllElements = () => {
    return [
      totalFireElement(),
      totalWaterElement(),
      totalEarthElement(),
      totalAirElement()]
  }
  const handleCraft = (): void => {
    setError('')
    if (firstSelectedOption() === null || secondSelectedOption() === null || thirdSelectedOption() === null) {
      setError("You haven't selected an item in every slot!")
      return
    }

    const selectedRecipe = getRecipeWithElements(getAllElements());
    if (selectedRecipe.type != "???"){
      addItem(selectedRecipe)

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
      setError('You need to match the elements exactly to craft this item!')
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
      <RecipeDisplay recipe={selectedRecipe()} />
      <RecipeSelector selectedRecipe={selectedRecipe()} setSelectedRecipe={setSelectedRecipe} />
    </div>
  )
}
