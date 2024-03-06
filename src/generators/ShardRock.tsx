import { _addItem, usePlayer } from '../player/player'
import { createSignal, type JSXElement } from 'solid-js'
import { smallFireShard, smallWaterShard, smallAirShard, smallEarthShard } from '../items/tier0'
import { type Item } from '../items/items'

const CLICKS_NEEDED = 1

export enum ShardRockType {
  FIRE,
  WATER,
  EARTH,
  AIR,
}

const getShardFromType = (shardRockType: ShardRockType): Item => {
  switch (shardRockType) {
    case ShardRockType.FIRE:
      return smallFireShard
    case ShardRockType.WATER:
      return smallWaterShard
    case ShardRockType.EARTH:
      return smallEarthShard
    case ShardRockType.AIR:
      return smallAirShard
  }
}

const getShardImage = (shardRockType: ShardRockType): string => {
  switch (shardRockType) {
    case ShardRockType.FIRE:
      return '/assets/items/one_fire_crystal__Anime_S531468354_St40_G7 (Custom).png'
    case ShardRockType.WATER:
      return '/assets/items/one_blue_crystal__Anime_S938936857_St40_G7 (Custom).png'
    case ShardRockType.EARTH:
      return '/assets/items/one_brown_crystal__Anime_S1221490770_St40_G7 (Custom).png'
    case ShardRockType.AIR:
      return '/assets/items/one_white_crystal__Anime_S3421455093_St40_G7 (Custom).png'
  }
}

export const ShardRock = (props: { shardRockType: ShardRockType }): JSXElement => {
  const [clickCount, setClickCount] = createSignal(CLICKS_NEEDED)
  const [, setInventory] = usePlayer()
  const addItem = _addItem(setInventory)

  const shard = getShardFromType(props.shardRockType)
  const shardImage = getShardImage(props.shardRockType)

  const handleClick = (): void => {
    setClickCount(clickCount() - 1)
    if (clickCount() === 0) {
      setClickCount(CLICKS_NEEDED)
      addItem(shard)
    }
  }

  return (
    <div
      class="relative"
      onClick={() => {
        handleClick()
      }}
    >
      <p class="absolute -translate-y-8"> u clicked</p>
      <img class="rounded-xl" src={shardImage} />
    </div>
  )
}
