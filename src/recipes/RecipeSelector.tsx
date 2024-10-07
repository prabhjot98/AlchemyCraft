import { For, type JSXElement, createSignal, Show } from 'solid-js'
import { ITEMS, type Item } from '../items/items'
import { RecipeCard } from './RecipeCard'
import { usePlayer } from '../player/player'

export const RecipeSelector = (): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)
  const [player, setPlayer] = usePlayer()

  const handleRecipeCardSelected = (r: Item): void => {
    setPlayer('selectedCraft', r.name)
    setModalIsOpen(false)
  }

  return (
    <div class="flex flex-row gap-2 align-middle">
      <img
        role="button"
        ondragstart={(e) => {
          e.preventDefault()
        }}
        class="size-16 rounded-md hover:bg-blue-300"
        src="/assets/icons/recipe_book.png"
        onClick={() => setModalIsOpen(true)}
        alt="Select a recipe"
      />
      <Show when={modalIsOpen()}>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-gray-100 border-1 border-black flex flex-wrap rounded-md gap-2 p-4 w-[600px] h-fit max-h-[600px] overflow-y-scroll"
        >
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="X"
          />
          <For each={ITEMS}>
            {(r) => (
              <RecipeCard
                item={r}
                onClick={() => {
                  handleRecipeCardSelected(r)
                }}
                selected={(() => {
                  if (player.selectedCraft === null) return false
                  if (player.selectedCraft === r.name) return true
                  return false
                })()}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
