import { addItem } from '../player/player'
import { type JSXElement } from 'solid-js'
import { type ItemName } from '../items/items'
import { ItemImg } from '../items/ItemIcon'

export const ShardRock = (props: { shardRock: ItemName }): JSXElement => {
  return (
    <div
      class="relative size-16"
      onClick={() => {
        addItem(props.shardRock)
      }}
    >
      <ItemImg itemName={props.shardRock} />
    </div>
  )
}
