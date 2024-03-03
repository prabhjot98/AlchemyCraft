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
      <h4 class="text-red-600" textContent={props.fireElement} />
      <h4 class="text-blue-600" textContent={props.waterElement} />
      <h4 class="text-amber-600" textContent={props.earthElement} />
      <h4 class="text-purple-600" textContent={props.airElement} />
    </div>
  )
}
