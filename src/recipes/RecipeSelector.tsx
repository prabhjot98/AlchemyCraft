import { For, type JSXElement, createSignal, Show } from 'solid-js'
import { ITEMS, type Item } from '../items/items'
import { usePlayer } from '../player/player'
import { ItemImg } from '../items/ItemIcon'

export function capitalizeWords (str: string): string {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .split(' ') // Split the string by spaces to get an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ') // Join the words back into a single string
}

const RecipeCard = (props: { item: Item, onClick?: () => void, selected: boolean }): JSXElement => {
  return (
    <tr class={'bg-gray-200 ' + (props.selected ? 'bg-green-200' : 'odd:bg-gray-100')} onClick={props.onClick}>
      <td class="rounded rounded-r-none text-left pl-1">
        <ItemImg itemName={props.item.name} />
        {capitalizeWords(props.item.name)}
      </td>
      <td class="text-red-600 text-center" textContent={props.item.fireElement} />
      <td class="text-blue-600 text-center" textContent={props.item.waterElement} />
      <td class="text-amber-600 text-center" textContent={props.item.earthElement} />
      <td class="text-purple-600 text-center rounded rounded-l-none" textContent={props.item.airElement} />
    </tr>
  )
}

export const RecipeSelector = (): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)
  const [player, setPlayer] = usePlayer()

  const handleRecipeCardSelected = (r: Item): void => {
    setPlayer('selectedCraft', r.name)
    setModalIsOpen(false)
  }

  return (
    <div class="flex flex-row gap-2 align-middle z-50">
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
        <div class="fixed top-0 left-0 bg-black/50 w-full h-full" onClick={() => setModalIsOpen(false)}>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-gray-100 border-1 border-black flex flex-col rounded-md gap-2 p-4
            w-fit h-fit max-h-[600px] "
          >
            <div class="overflow-y-scroll">
              <table class="border-collapse">
                <thead>
                  <tr class="bg-gray-300 sticky top-0">
                    <th class="sticky top-0 w-32 pl-1 rounded rounded-r-none rounded-b-none text-left font-medium">
                      Item
                    </th>
                    <th class="sticky w-14 text-center font-medium">Fire</th>
                    <th class="sticky w-14 text-center font-medium">Water</th>
                    <th class="sticky w-14 text-center font-medium">Earth</th>
                    <th class="sticky w-14 rounded rounded-l-none rounded-b-none text-center font-medium">Air</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}
