import { type Setter, type JSXElement, createContext, useContext, Show, createSignal, createEffect } from 'solid-js'
import { Portal } from 'solid-js/web'

export const ModalContext = createContext<Setter<JSXElement>>()

export function useModal () {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('No value in modal context')
  }
  return context
}

export const Modal = (): JSXElement => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)
  const [elementInModal, setElementInModal] = createSignal<JSXElement>()

  ModalContext.defaultValue = setElementInModal

  createEffect(() => {
    if (elementInModal() !== undefined) {
      setModalIsOpen(true)
    }
  })

  return (
    <Portal>
      <div class="fixed top-0 z-50">
        <Show when={modalIsOpen()}>
          <div class="fixed bg-black/30 w-screen h-screen" onClick={() => setModalIsOpen(false)} />
          <div class="md:translate-x-1/2 md:translate-y-1/2 rounded-lg p-2">{elementInModal()}</div>
        </Show>
      </div>
    </Portal>
  )
}
