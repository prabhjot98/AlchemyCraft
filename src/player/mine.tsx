import { ShardRock } from '../generators/ShardRock'

export const Mine = () => {
  return (
    <div class="bg-white/50 size-fit rounded drop-shadow-2xl flex flex-wrap gap-2 justify-center">
      <ShardRock shardRock={'fire shard'} />
      <ShardRock shardRock={'water shard'} />
      <ShardRock shardRock={'earth shard'} />
      <ShardRock shardRock={'air shard'} />
    </div>
  )
}
