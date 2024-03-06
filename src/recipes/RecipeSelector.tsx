import { For, type Setter, type JSXElement, createSignal, Show } from 'solid-js'
import { usePlayer } from '../player/player'
import { ItemCard } from '../items/ItemCard'
import { type Item } from '../items/items'

export const RecipeSelector = (props: { selectedRecipe: Item, setSelectedRecipe: Setter<Item> }): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)
  const [player] = usePlayer()

  const handleRecipeCardSelected = (r: Item): void => {
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
      <Show when={modalIsOpen()}>
        <div class="absolute bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-[600px] h-fit">
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="X"
          />
          <For each={player.knownItems}>
            {(r) => (
              <ItemCard
                item={r}
                onClick={() => {
                  handleRecipeCardSelected(r)
                }}
                selected={props.selectedRecipe === r}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
