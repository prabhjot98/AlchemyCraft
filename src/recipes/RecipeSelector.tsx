import { For, type Setter, type JSXElement, createSignal } from 'solid-js'
import { RecipeCard } from './RecipeCard'
import { RECIPES, type Recipe } from './recipes'
import { Modal } from '../components/Modal'

export const RecipeSelector = (props: { selectedRecipe: Recipe, setSelectedRecipe: Setter<Recipe> }): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const handleRecipeCardSelected = (r: Recipe): void => {
    props.setSelectedRecipe(r)
    setModalIsOpen(false)
  }

  return (
    <div class="flex flex-row gap-2 align-middle">
      <button
        class="bg-gray-200 p-1 rounded-md border border-black"
        onClick={() => setModalIsOpen(true)}
        innerText="Select a recipe"
      />
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <div class="absolute bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-[600px] h-fit">
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="X"
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
      </Modal>
    </div>
  )
}
