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
      return '/assets/shard crystals/red_crystal.png'
    case ShardRockType.WATER:
      return '/assets/shard crystals/blue_crystal.png'
    case ShardRockType.EARTH:
      return '/assets/shard crystals/brown_crystal.png'
    case ShardRockType.AIR:
      return '/assets/shard crystals/white_crystal.png'
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
      <img class="rounded-xl" src={shardImage} />
    </div>
  )
}
