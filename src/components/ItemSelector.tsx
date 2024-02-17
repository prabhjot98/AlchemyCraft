import { For, type JSXElement, createSignal, type Setter } from 'solid-js'
import { ItemDisplay } from './ItemDisplay'
import { type Item } from '../types/item'
import { type SetStoreFunction } from 'solid-js/store'
import { _removeItem, type Inventory } from '../types/inventory'

export const ItemSelector = (props: {
  items: Map<Item, number>
  setInventory: SetStoreFunction<Inventory>
  selectedItem: Item | null
  setSelectedItem: Setter<Item | null>
}): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const removeItem = _removeItem(props.setInventory)

  const handleItemSelected = (i: Item): void => {
    removeItem(i)
    props.setSelectedItem(i)
    setModalIsOpen(false)
  }
  return (
    <div class="flex flex-row gap-2 align-middle">
      <button
        class="bg-gray-200 p-1 rounded-md border border-black"
        onClick={() => setModalIsOpen(true)}
        innerText="Select an item"
      />
      {props.selectedItem !== null && <p class="p-1">Currently selected item is {props.selectedItem.type}</p>}
      {modalIsOpen() && (
        <div class="fixed top-[10%] left-[10%] bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-1/2 h-fit">
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="Close"
          />
          <For each={[...props.items.keys()]}>
            {(i) => (
              <ItemDisplay
                item={i}
                count={props.items.get(i) ?? 0}
                onClick={() => {
                  handleItemSelected(i)
                }}
              />
            )}
          </For>
        </div>
      )}
    </div>
  )
}
