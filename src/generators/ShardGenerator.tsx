import { createSignal, type JSXElement } from 'solid-js'
import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, type Player } from '../player/player'
import { type Item } from '../items/items'

export const ShardGenerator = (props: {
  setInventory: SetStoreFunction<Player>
  shard: Item
  duration: number
}): JSXElement => {
  const [shardCount, setShardCount] = createSignal<number>(0)
  setInterval(() => setShardCount(shardCount() + 1), props.duration)

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
