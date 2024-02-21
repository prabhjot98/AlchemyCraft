import { createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, type Inventory } from '../types/inventory'
import { type Item } from '../types/items'

const DURATION = 1000 * 15

export const ShardGenerator = (props: { setInventory: SetStoreFunction<Inventory>, shard: Item }): JSXElement => {
  const [shardCount, setShardCount] = createSignal<number>(0)
  setInterval(() => setShardCount(shardCount() + 1), DURATION)

  const addItem = _addItem(props.setInventory)

  const handleClaimShards = (): void => {
    addItem(props.shard, shardCount())
    setShardCount(0)
  }

  return (
    <span
      class="flex w-32 h-32 bg-gray-200 border border-black rounded-md"
      onClick={() => {
        handleClaimShards()
      }}
    >
      You have {shardCount()} {props.shard.type} ready to claim
    </span>
  )
}
