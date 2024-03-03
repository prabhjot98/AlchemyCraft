import { For, createSignal, type JSXElement, createMemo } from 'solid-js'
import { ItemDisplay } from '../items/ItemDisplay'
import { usePlayer } from '../player/player'

export const InventoryList = (): JSXElement => {
  const [player] = usePlayer()
  const itemsToShow = [...player.items.keys()]
  const [filter, setFilter] = createSignal<string>('')
  const filteredItems = createMemo(() => {
    return itemsToShow.filter((item) => filter() === '' || item.type.search(filter()) !== -1)
  })

  return (
    <div class="flex flex-col bg-gray-300/80 rounded-lg min-h-96 p-2">
      <h1 class="mx-auto" textContent="Inventory" />
      <h4 class="mx-auto" textContent={`Gold: ${player.gold}`} />
      <input
        type="textbox"
        value={filter()}
        onBlur={(e) => {
          setFilter(e.target.value)
        }}
        class="my-2 rounded-lg"
      />
      <div class="flex flex-col w-full gap-2 overflow-y-scroll">
        <For
          each={filteredItems()}
          children={(item) => {
            return <ItemDisplay item={item} count={player.items.get(item) ?? 0} />
          }}
        />
      </div>
    </div>
  )
}
