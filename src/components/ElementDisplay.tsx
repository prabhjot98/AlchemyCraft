import { type JSXElement } from 'solid-js'

export const ElementDisplay = (
  fireElement: number,
  waterElement: number,
  earthElement: number,
  airElement: number
): JSXElement => {
  return (
    <div class="flex flex-row gap-1">
      <p class="text-red-600" textContent={fireElement} />
      <p class="text-blue-600" textContent={waterElement} />
      <p class="text-amber-600" textContent={earthElement} />
      <p class="text-purple-600" textContent={airElement} />
    </div>
  )
}
