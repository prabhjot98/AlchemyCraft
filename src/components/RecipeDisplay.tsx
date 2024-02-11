import { type JSXElement } from 'solid-js'

export const RecipeDisplay = (recipe: Recipe): JSXElement => {
  return (
    <div class="flex flex-row">
      <p textContent="You need at least" />
      <p class="text-red-600" textContent={recipe.fireElement + ' fire,'} />
      <p class="text-blue-600" textContent={recipe.waterElement + 'water,'} />
      <p class="text-amber-600" textContent={recipe.earthElement + 'earth,'} />
      <p class="text-purple-600" textContent={recipe.airElement + 'air,'} />
      <p textContent={`to craft ${recipe.type}`} />
    </div>
  )
}
