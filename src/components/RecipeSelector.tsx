import { For, Show, createSignal, type JSXElement } from 'solid-js'
import { Portal } from 'solid-js/web'
import { ItemImg } from '../items/ItemIcon'
import { ITEMS, findItem, sortByTotalElements, type Item, type ItemName } from '../player/items'
import { usePlayer } from '../player/player'

export function capitalizeWords (str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const BlurryItemImg = (props: { itemName: ItemName, onClick?: () => void }) => {
  const item = () => findItem(props.itemName)
  return (
    <img
      ondragstart={(e) => {
        e.preventDefault()
      }}
      onClick={props.onClick}
      class="size-16 rounded-[32px] hover:cursor-pointer blur-sm"
      src={item().imgSrc}
    />
  )
}

const RecipeCard = (props: { item: Item, onClick?: () => void }): JSXElement => {
  const [player] = usePlayer()
  const isUnlocked = player.unlockedItems.find((i) => i === props.item.name)

  return (
    <tr class="bg-gray-200 hover:bg-blue-200 active:bg-blue-300  odd:bg-gray-100" onClick={props.onClick}>
      <td class="rounded rounded-r-none text-left pl-1">
        <Show when={isUnlocked}>
          <ItemImg itemName={props.item.name} />
          {capitalizeWords(props.item.name)}
        </Show>
        <Show when={!isUnlocked}>
          <BlurryItemImg itemName={props.item.name} />
          {props.item.name.replace(/.*/, '???')}
        </Show>
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
  const [, setPlayer] = usePlayer()

  const handleRecipeCardSelected = (r: Item): void => {
    console.log(r.name)
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
        class="size-16 rounded-md hover:bg-blue-200 active:bg-blue-300"
        src="/assets/icons/recipe_book.png"
        onClick={() => setModalIsOpen(true)}
        alt="Select a recipe"
      />
      <Show when={modalIsOpen()}>
        <Portal>
          <div class="fixed top-0 left-0 bg-black/50 w-full h-full" onClick={() => setModalIsOpen(false)}>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-gray-100 border-1 border-black flex flex-col rounded-md gap-2 p-4 w-96 min-h-96 max-h-[680px]"
            >
              <div class="overflow-y-auto">
                <table class="border-collapse">
                  <thead>
                    <tr class="bg-gray-300 sticky top-0 z-50">
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
                    <For each={ITEMS.sort((i1, i2) => sortByTotalElements(i1.name, i2.name))}>
                      {(r) => (
                        <RecipeCard
                          item={r}
                          onClick={() => {
                            handleRecipeCardSelected(r)
                          }}
                        />
                      )}
                    </For>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  )
}
