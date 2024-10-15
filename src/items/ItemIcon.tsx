import { type ItemName, findItem } from './items'

export const ItemImg = (props: { itemName: ItemName, onClick?: () => void }) => {
  const item = () => findItem(props.itemName)
  return (
    <img
      ondragstart={(e) => {
        e.preventDefault()
      }}
      onClick={props.onClick}
      class="size-16 rounded-[32px] hover:cursor-pointer"
      src={item().imgSrc}
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
