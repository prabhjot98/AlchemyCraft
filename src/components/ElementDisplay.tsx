import { type JSXElement } from 'solid-js'

export const ElementDisplay = (props: {
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
  class?: string
}): JSXElement => {
  return (
    <div class={'flex flex-row gap-1 ' + props.class}>
      <p class="text-xl text-red-600" textContent={props.fireElement} />
      <p class="text-xl text-blue-600" textContent={props.waterElement} />
      <p class="text-xl text-amber-600" textContent={props.earthElement} />
      <p class="text-xl text-purple-600" textContent={props.airElement} />
    </div>
  )
}
