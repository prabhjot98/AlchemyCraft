import { type JSXElement } from 'solid-js'
import { type Item } from '../types/items'
import { ElementDisplay } from './ElementDisplay'

export const RecipeCard = (props: { recipe: Item, onClick?: () => void, selected?: boolean }): JSXElement => {
  return (
    <div
      class="flex flex-col w-32 h-16 p-1 rounded-md bg-gray-300"
      classList={{ 'bg-green-300': props.selected === true }}
      onClick={props.onClick}
    >
      <p class="text-base mx-auto font-semibold" textContent={props.recipe.type} />
      <ElementDisplay
        class="mb-0 mt-auto mx-auto"
        fireElement={props.recipe.fireElement}
        waterElement={props.recipe.waterElement}
        earthElement={props.recipe.earthElement}
        airElement={props.recipe.airElement}
      />
    </div>
  )
}
