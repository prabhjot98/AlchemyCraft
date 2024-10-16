import { findItem, type ItemName } from '../player/items'

export const ItemImg = (props: { itemName: ItemName, onClick?: () => void, class?: string }) => {
  const item = () => findItem(props.itemName)
  return (
    <img
      ondragstart={(e) => {
        e.preventDefault()
      }}
      onClick={props.onClick}
      class={'size-16 rounded-[32px] hover:cursor-pointer ' + props.class}
      src={item().imgSrc}
      role="button"
    />
  )
}

export const ItemIcon = (props: { itemName: ItemName }) => {
  return (
    <div class="size-16 rounded-sm relative bg-white/50 ">
      <ItemImg itemName={props.itemName} />
    </div>
  )
}
