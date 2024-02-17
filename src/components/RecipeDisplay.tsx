import { type JSXElement } from 'solid-js'
import { type Recipe } from '../types/recipes'

export const RecipeDisplay = (props: { recipe: Recipe }): JSXElement => {
  return (
    <div class="flex flex-row">
      <p class="pr-1" textContent="You need at least" />
      <p class="text-red-600 pr-1" textContent={props.recipe.fireElement + ' fire, '} />
      <p class="text-blue-600 pr-1" textContent={props.recipe.waterElement + ' water,'} />
      <p class="text-amber-600 pr-1" textContent={props.recipe.earthElement + ' earth,'} />
      <p class="text-purple-600 pr-1" textContent={props.recipe.airElement + ' air,'} />
      <p class="pr-1" textContent="to craft" />
      <p class="font-bold" textContent={`${props.recipe.type}`} />
    </div>
  )
}
