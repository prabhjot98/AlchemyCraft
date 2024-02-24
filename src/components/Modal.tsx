import { type Accessor, type Setter, type JSXElement } from 'solid-js'

export const Modal = (props: {
  children: JSXElement
  isOpen: Accessor<boolean>
  setIsOpen: Setter<boolean>
}): JSXElement => {
  return (
    <div class="fixed top-1/3 left-1/3">
      {props.isOpen() && (
        <div class="fixed top-0 left-0 bg-black/30 w-full h-full" onClick={() => props.setIsOpen(false)} />
      )}
      {props.isOpen() && props.children}
    </div>
  )
}
