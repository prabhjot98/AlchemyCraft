import { type Accessor, type Setter, type JSXElement } from 'solid-js'

export const Modal = (props: {
  children: JSXElement
  isOpen: Accessor<boolean>
  setIsOpen: Setter<boolean>
}): JSXElement => {
  return (
    <div class="flex flex-row gap-2 align-middle">
      {props.isOpen() && (
        <div class="absolute top-0 left-0 bg-black/30 w-full h-full" onClick={() => props.setIsOpen(false)} />
      )}
      {props.isOpen() && props.children}
    </div>
  )
}
