import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, type Inventory } from '../types/inventory'
import { createSignal, type JSXElement } from 'solid-js'
import { type Item } from '../types/items'

const CLICKS_NEEDED = 10

export const ShardRock = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
  shard: Item
}): JSXElement => {
  const [clickCount, setClickCount] = createSignal(CLICKS_NEEDED)
  const addItem = _addItem(props.setInventory)

  const handleClick = (): void => {
    setClickCount(clickCount() - 1)
    if (clickCount() === 0) {
      setClickCount(CLICKS_NEEDED)
      addItem(props.shard)
    }
  }

  return (
    <button
      class="h-32 w-32"
      onClick={() => {
        handleClick()
      }}
    >
      {clickCount()} till {props.shard.type}
    </button>
  )
}
