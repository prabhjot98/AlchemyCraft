import { For, type JSXElement, createSignal, type Setter } from 'solid-js'
import { ItemDisplay } from './ItemDisplay'
import { type Item } from '../types/items'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, _removeItem, type Inventory } from '../types/inventory'
import { Modal } from './Modal'

export const ItemSelector = (props: {
  items: Map<Item, number>
  setInventory: SetStoreFunction<Inventory>
  selectedItem: Item | null
  setSelectedItem: Setter<Item | null>
}): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const removeItem = _removeItem(props.setInventory)
  const addItem = _addItem(props.setInventory)

  const handleItemSelected = (i: Item): void => {
    if (props.selectedItem !== null) {
      addItem(props.selectedItem)
    }
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
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <div class="absolute bg-white border-2 border-black flex flex-wrap rounded-md gap-2 p-4 w-80 h-fit z-10">
          <button
            class="absolute right-2 bottom-2 p-2 bg-red-300 border border-black rounded-md"
            onClick={() => setModalIsOpen(false)}
            innerText="X"
          />
          {[...props.items.keys()].length === 0 && <p class="text-xl" innerText="Nothing in your inventory" />}
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
      </Modal>
    </div>
  )
}
