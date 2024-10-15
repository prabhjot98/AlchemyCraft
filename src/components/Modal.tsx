import { type Setter, type JSXElement, createContext, useContext } from 'solid-js'

export const ModalContext = createContext<Setter<JSXElement>>()

export function useModal () {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('No value in modal context')
  }
  return context
}
