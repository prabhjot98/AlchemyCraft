export const randomReagent = (reagents: Reagent[]): Reagent => {
  const randomIndex = Math.floor(Math.random() * reagents.length)
  return reagents[randomIndex]
}

export interface Reagent {
  type: string
  fireElement: number
  waterElement: number
  earthElement: number
  airElement: number
}

const ironOre: Reagent = {
  type: 'iron ore',
  fireElement: 2,
  waterElement: 0,
  earthElement: 2,
  airElement: 0
}

const copperOre: Reagent = {
  type: 'copper ore',
  fireElement: 1,
  waterElement: 0,
  earthElement: 2,
  airElement: 0
}

const goldOre: Reagent = {
  type: 'gold ore',
  fireElement: 2,
  waterElement: 0,
  earthElement: 4,
  airElement: 0
}

const mandrake: Reagent = {
  type: 'mandrake',
  fireElement: 0,
  waterElement: 2,
  earthElement: 2,
  airElement: 2
}

const vinegar: Reagent = {
  type: 'vinegar',
  fireElement: 1,
  waterElement: 3,
  earthElement: 1,
  airElement: 3
}

const water: Reagent = {
  type: 'water',
  fireElement: 0,
  waterElement: 8,
  earthElement: 0,
  airElement: 0
}

export const REAGENTS = [ironOre, copperOre, goldOre, mandrake, vinegar, water]

export const calcTotalFireElement = (...reagents: Array<Reagent | null>): number => {
  let total = 0
  reagents.forEach((r) => (total += r?.fireElement ?? 0))
  return total
}

export const calcTotalWaterElement = (...reagents: Array<Reagent | null>): number => {
  let total = 0
  reagents.forEach((r) => (total += r?.waterElement ?? 0))
  return total
}

export const calcTotalEarthElement = (...reagents: Array<Reagent | null>): number => {
  let total = 0
  reagents.forEach((r) => (total += r?.earthElement ?? 0))
  return total
}

export const calcTotalAirElement = (...reagents: Array<Reagent | null>): number => {
  let total = 0
  reagents.forEach((r) => (total += r?.airElement ?? 0))
  return total
}
