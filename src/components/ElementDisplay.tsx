import { type JSXElement } from 'solid-js'

export const ElementDisplay = (props: {
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
}): JSXElement => {
  return (
    <div class="flex flex-row gap-1">
      <p class="text-red-600" textContent={props.fireElement} />
      <p class="text-blue-600" textContent={props.waterElement} />
      <p class="text-amber-600" textContent={props.earthElement} />
      <p class="text-purple-600" textContent={props.airElement} />
    </div>
  )
}
