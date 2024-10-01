import { usePlayer } from '../player/player'
import { type ItemName, findItem } from './items'

export const ItemImg = (props: { itemName: ItemName }) => {
  const item = () => findItem(props.itemName)
  return (
    <img
      ondragstart={(e) => {
        e.preventDefault()
      }}
      class="size-16"
      src={item().imgSrc}
    />
  )
}

export const ItemIcon = (props: { itemName: ItemName }) => {
  const [player] = usePlayer()
  const quantity = () => player.items.get(props.itemName)

  return (
    <div class="size-16 rounded relative bg-white/50 ">
      <ItemImg itemName={props.itemName} />
      <div class="absolute bg-white rounded size-6 text-center bottom-1 right-1">{quantity()}</div>
    </div>
  )
}
