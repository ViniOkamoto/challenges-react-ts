const furniture = [
  'traditional',
  'cold',
  'with alchohol',
  'with milk',
  'special',
] as const

type CoffeeCategory = typeof furniture[number]

export default interface Coffe {
  id: number
  tags: CoffeeCategory[]
  name: string
  description: string
  photo: string
  price: number
}
