import { For, createSignal, type JSXElement, createMemo } from 'solid-js'
import { ItemDisplay } from '../items/ItemDisplay'
import { usePlayer } from '../player/player'

export const RecipeList = (): JSXElement => {
  const [filter, setFilter] = createSignal<string>('')
  const [player] = usePlayer()
  const filteredItems = createMemo(() => {
    return player.knownItems.filter((item) => filter() === '' || item.type.search(filter()) !== -1)
  })

  return (
    <div class="flex flex-col bg-gray-300/80 rounded-lg h-[500px] p-2">
      <h1 class="mx-auto" textContent="Recipes" />
      <input
        type="textbox"
        value={filter()}
        onBlur={(e) => {
          setFilter(e.target.value)
        }}
        class="my-2 rounded-lg"
      />
      <div class="flex flex-col h-fit gap-2 overflow-y-scroll">
        <For
          each={filteredItems()}
          children={(item) => {
            return <ItemDisplay item={item} />
          }}
        />
      </div>
    </div>
  )
}
