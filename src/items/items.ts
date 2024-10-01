export const randomItemFrom = (items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export interface Item {
  name: ItemName
  imgSrc: string
}

export type ItemName =
  | 'small fire shard'
  | 'small water shard'
  | 'small earth shard'
  | 'small air shard'
  | "philospher's stone"

export const smallFireShard: Item = {
  name: 'small fire shard',
  imgSrc: '/assets/shard crystals/red_crystal.png'
}

export const smallWaterShard: Item = {
  name: 'small water shard',
  imgSrc: '/assets/shard crystals/blue_crystal.png'
}

export const smallEarthShard: Item = {
  name: 'small earth shard',
  imgSrc: '/assets/shard crystals/brown_crystal.png'
}

export const smallAirShard: Item = {
  name: 'small air shard',
  imgSrc: '/assets/shard crystals/white_crystal.png'
}

export const ITEMS = [smallFireShard, smallAirShard, smallEarthShard, smallWaterShard]

export function findItem (itemName: ItemName): Item {
  const foundItem = ITEMS.find((i) => i.name === itemName)
  if (foundItem === undefined) {
    throw new Error(`Item not found ${itemName}`)
  }
  return foundItem
}
