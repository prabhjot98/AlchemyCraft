import { type JSXElement } from 'solid-js'
import { type Item } from '../items/items'
import { ElementDisplay } from '../components/ElementDisplay'

export const RecipeCard = (props: { recipe: Item, onClick?: () => void, selected?: boolean }): JSXElement => {
  return (
    <div
      class="flex flex-col w-32 h-20 p-1 rounded-md bg-gray-300"
      classList={{ 'bg-green-300': props.selected === true }}
      onClick={props.onClick}
    >
      <p class="font-semibold" textContent={props.recipe.type} />
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
