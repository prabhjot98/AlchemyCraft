import { PlayerContext, removeItem, setSlot } from './player/player'
import { Modal, ModalContext } from './components/Modal'
import { Toaster } from 'solid-toast'
import { DragDropProvider, DragDropSensors, type DragEventHandler, mostIntersecting } from '@thisbeyond/solid-dnd'
import { Game } from './Game'
import { type ItemName } from './items/items'

export const App = () => {
  const onDragEnd: DragEventHandler = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      const itemName = draggable.id as ItemName
      if (droppable.id === 1) {
        setSlot(itemName, '1')
      } else if (droppable.id === 2) {
        setSlot(itemName, '2')
      } else if (droppable.id === 3) {
        setSlot(itemName, '3')
      } else if (droppable.id === 4) {
        setSlot(itemName, '4')
      }
      removeItem(itemName)
    }
  }

  return (
    <PlayerContext.Provider value={PlayerContext.defaultValue}>
      <Toaster gutter={0} position="top-right" />
      <ModalContext.Provider value={undefined}>
        <Modal />
        <DragDropProvider onDragEnd={onDragEnd} collisionDetector={mostIntersecting}>
          <DragDropSensors />
          <Game />
        </DragDropProvider>
      </ModalContext.Provider>
    </PlayerContext.Provider>
  )
}
