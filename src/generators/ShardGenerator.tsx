import { createSignal, type JSXElement } from 'solid-js'
import { addItem, usePlayer } from '../player/player'
import { type Item } from '../items/items'

export const ShardGenerator = (props: { shard: Item, duration?: number }): JSXElement => {
  const [shardCount, setShardCount] = createSignal<number>(0)
  setInterval(() => setShardCount(shardCount() + 1), props.duration)

  const [, setPlayer] = usePlayer()

  const addItem = addItem(setPlayer)

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
      You have {shardCount()} {props.shard.name} ready to claim
    </span>
  )
}
