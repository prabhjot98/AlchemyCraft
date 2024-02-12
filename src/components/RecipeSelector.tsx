/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { For, type Setter, type JSXElement } from 'solid-js'
import { RECIPES, type Recipe } from '../types/recipes'

export const RecipeSelector = (props: { selectedRecipe: Recipe, setSelectedRecipe: Setter<Recipe> }): JSXElement => {
  const handleSelectRecipe = (e: { target: { value: string } }): void => {
    const recipe = RECIPES.find((r) => r.type === e.target.value)!
    props.setSelectedRecipe(recipe)
  }

  return (
    <select onChange={handleSelectRecipe}>
      <For
        each={RECIPES}
        children={(r) => <option selected={props.selectedRecipe.type === r.type} value={r.type} innerText={r.type} />}
      />
    </select>
  )
}
