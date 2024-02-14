/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { For, createEffect, createSignal, type JSXElement, type Setter } from 'solid-js'
import { removeReagent, type Inventory, addReagent } from '../types/inventory'
import {
  calcTotalAirElement,
  calcTotalEarthElement,
  calcTotalFireElement,
  calcTotalWaterElement,
  type Reagent
} from '../types/reagents'
import { type Recipe, fireShard2 } from '../types/recipes'
import { ElementDisplay } from './ElementDisplay'
import { RecipeDisplay } from './RecipeDisplay'
import { RecipeSelector } from './RecipeSelector'

export const AlchemyCircle = (props: { inventory: Inventory, setInventory: Setter<Inventory> }): JSXElement => {
  const [firstSelectedOption, setFirstSelectedOption] = createSignal<Reagent | null>(null)
  const [secondSelectedOption, setSecondSelectedOption] = createSignal<Reagent | null>(null)
  const [thirdSelectedOption, setThirdSelectedOption] = createSignal<Reagent | null>(null)

  const [totalFireElement, setTotalFireElement] = createSignal<number>(0)
  const [totalWaterElement, setTotalWaterElement] = createSignal<number>(0)
  const [totalEarthElement, setTotalEarthElement] = createSignal<number>(0)
  const [totalAirElement, setTotalAirElement] = createSignal<number>(0)

  createEffect(() => {
    setTotalFireElement(calcTotalFireElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption()))
    setTotalWaterElement(calcTotalWaterElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption()))
    setTotalEarthElement(calcTotalEarthElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption()))
    setTotalAirElement(calcTotalAirElement(firstSelectedOption(), secondSelectedOption(), thirdSelectedOption()))
  })

  const [selectedRecipe, setSelectedRecipe] = createSignal<Recipe>(fireShard2)

  const [error, setError] = createSignal<string>('')

  const [options, setOptions] = createSignal(Object.keys(props.inventory.reagents).map(obj => JSON.parse(obj)))

  createEffect(() => setOptions(Object.keys(props.inventory.reagents).map(obj => JSON.parse(obj))))

  const handleOptionSelected = (
    selectedOption: string,
    previousReagent: Reagent | null,
    setter: Setter<Reagent | null>
  ): void => {
    const selectedReagent = JSON.parse(selectedOption);
    console.log(selectedReagent)
    removeReagent(selectedReagent, props.setInventory)
    console.log(props.inventory.reagents)
    // const r = props.inventory.reagents.find((r) => r.type === selectedOption)!
    setter(selectedReagent)
    console.log(props.inventory.reagents[selectedOption])
    if(props.inventory.reagents[selectedOption] === 1){
      const index = options().findIndex((op) => op.type === selectedOption)
      const newOptions = [...options()]

      newOptions.splice(index, 1)
      setOptions(newOptions)
      console.log('updated')
    }
    if (previousReagent !== null) {
      addReagent(previousReagent, props.setInventory)
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
      removeReagent(firstSelectedOption()!, props.setInventory)
      removeReagent(secondSelectedOption()!, props.setInventory)
      removeReagent(thirdSelectedOption()!, props.setInventory)
      addReagent(selectedRecipe(), props.setInventory)

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
          {firstSelectedOption() != null && props.inventory.reagents[JSON.stringify(firstSelectedOption)] === undefined && <option selected value={JSON.stringify(firstSelectedOption())} textContent={firstSelectedOption()?.type} />}
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
          {secondSelectedOption() != null && props.inventory.reagents[JSON.stringify(secondSelectedOption)] === undefined && <option selected value={JSON.stringify(secondSelectedOption())} textContent={secondSelectedOption()?.type} />}
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
          {thirdSelectedOption() != null && props.inventory.reagents[JSON.stringify(thirdSelectedOption)] === undefined && <option selected value={JSON.stringify(thirdSelectedOption())} textContent={thirdSelectedOption()?.type} />}
          <For each={options()} children={(item) => <option value={JSON.stringify(item)}  textContent={item.type} />} />
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
