import { ShardRock } from '../generators/ShardRock'

export const Mine = () => {
  return (
    <div class="bg-white/50 rounded drop-shadow-2xl flex flex-wrap gap-2 max-h-[80%] max-w-[80%] m-auto justify-center">
      <ShardRock shardRock={'small fire shard'} />
      <ShardRock shardRock={'small water shard'} />
      <ShardRock shardRock={'small earth shard'} />
      <ShardRock shardRock={'small air shard'} />
    </div>
  )
}
