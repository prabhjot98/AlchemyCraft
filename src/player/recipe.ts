import { type ItemName } from '../items/items'

export interface Recipe {
  firstItem: ItemName
  secondItem: ItemName
  thirdItem: ItemName
  result: ItemName
}

const livingClay: Recipe = {
  firstItem: 'small fire shard',
  secondItem: 'small fire shard',
  thirdItem: 'small fire shard',
  result: 'small water shard'
}

const RECIPES: Recipe[] = [livingClay]

export const isValidCraft = (item1: ItemName, item2: ItemName, item3: ItemName): Recipe | false => {
  let result: boolean | Recipe = false
  RECIPES.forEach((recipe) => {
    if (item1 === recipe.firstItem || item1 === recipe.secondItem || item1 === recipe.thirdItem) {
      if (item2 === recipe.firstItem || item2 === recipe.secondItem || item2 === recipe.thirdItem) {
        if (item3 === recipe.firstItem || item3 === recipe.secondItem || item3 === recipe.thirdItem) {
          result = recipe
        }
      }
    }
  })
  return result
}
