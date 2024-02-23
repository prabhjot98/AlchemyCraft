import { type SetStoreFunction } from 'solid-js/store'
import { _addItem, type Inventory } from '../inventory/inventory'
import { createSignal, type JSXElement } from 'solid-js'
import { fireShard1, waterShard1, type Item, airShard1 } from '../items/items'

const CLICKS_NEEDED = 10

export enum ShardRockType {
  FIRE,
  WATER,
  EARTH,
  AIR,
}

const getShardFromType = (shardRockType: ShardRockType): Item => {
  switch (shardRockType) {
    case ShardRockType.FIRE:
      return fireShard1
    case ShardRockType.WATER:
      return waterShard1
    case ShardRockType.EARTH:
      return waterShard1
    case ShardRockType.AIR:
      return airShard1
  }
}

const getShardImage = (shardRockType: ShardRockType): string => {
  switch (shardRockType) {
    case ShardRockType.FIRE:
      return '../../public/assets/items/one_fire_crystal__Anime_S531468354_St40_G7 (Custom).png'
    case ShardRockType.WATER:
      return '../../public/assets/items/one_blue_crystal__Anime_S938936857_St40_G7 (Custom).png'
    case ShardRockType.EARTH:
      return '../../public/assets/items/one_brown_crystal__Anime_S1221490770_St40_G7 (Custom).png'
    case ShardRockType.AIR:
      return '../../public/assets/items/one_white_crystal__Anime_S3421455093_St40_G7 (Custom).png'
  }
}

export const ShardRock = (props: {
  inventory: Inventory
  setInventory: SetStoreFunction<Inventory>
  shardRockType: ShardRockType
}): JSXElement => {
  const [clickCount, setClickCount] = createSignal(CLICKS_NEEDED)
  const addItem = _addItem(props.setInventory)

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
    <div class="relative">
      <p class="absolute text-xl text-white bg-black rounded-xl">{shard.type}</p>
      <p class="absolute text-xl top-[100px] right-0 bg-black rounded-xl text-white">{clickCount()}</p>
      <img
        class="h-32 w-32 rounded-xl"
        onClick={() => {
          handleClick()
        }}
        src={shardImage}
      />
    </div>
  )
}
