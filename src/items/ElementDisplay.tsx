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
      <span class="text-red-600" textContent={props.fireElement} />
      <span class="text-blue-600" textContent={props.waterElement} />
      <span class="text-amber-600" textContent={props.earthElement} />
      <span class="text-purple-600" textContent={props.airElement} />
    </div>
  )
}
