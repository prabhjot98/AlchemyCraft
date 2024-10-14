import { addItem } from '../player/player'
import { type JSXElement } from 'solid-js'
import { type ItemName } from '../items/items'
import { ItemImg } from '../items/ItemIcon'
import toast from 'solid-toast'
import { capitalizeWords } from '../recipes/RecipeSelector'

export const ShardRock = (props: { shardRock: ItemName }): JSXElement => {
  return (
    <div
      class="relative size-16 hover:bg-blue-300 rounded"
      onClick={() => {
        addItem(props.shardRock)
        toast(`Obtained ${capitalizeWords(props.shardRock)}`)
      }}
    >
      <ItemImg itemName={props.shardRock} />
    </div>
  )
}
