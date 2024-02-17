import { For, type Setter, type JSXElement, createSignal } from 'solid-js'
import { RECIPES, type Recipe } from '../types/recipes'
import { RecipeCard } from './RecipeCard'

export const RecipeSelector = (props: { selectedRecipe: Recipe, setSelectedRecipe: Setter<Recipe> }): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const handleRecipeCardSelected = (r: Recipe): void => {
    props.setSelectedRecipe(r)
    setModalIsOpen(false)
  }
  return (
    <div>
      {modalIsOpen() && (
        <div class="absolute top-0 left-0 bg-black/30 w-full h-full" onClick={() => setModalIsOpen(false)} />
      )}

      <button
        class="bg-gray-200 p-1 rounded-md border border-black"
        onClick={() => setModalIsOpen(true)}
        innerText="Select a recipe"
      />
      {modalIsOpen() && (
        <div class="fixed top-[10%] left-[10%] bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-1/2 h-fit">
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="Close"
          />
          <For each={RECIPES}>
            {(r) => (
              <RecipeCard
                recipe={r}
                onClick={() => {
                  handleRecipeCardSelected(r)
                }}
                selected={props.selectedRecipe === r}
              />
            )}
          </For>
        </div>
      )}
    </div>
  )
}
