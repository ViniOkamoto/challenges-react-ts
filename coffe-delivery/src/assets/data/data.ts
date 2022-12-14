import Coffee from '../../models/coffee'

export const coffees: Coffee[] = [
  {
    id: 1,
    tags: ['traditional'],
    name: 'Traditional Espresso',
    description:
      'The traditional coffee made with hot water and  ground grains',
    photo: 'tradicional.png',
    price: 9.9,
  },
  {
    id: 2,
    tags: ['traditional'],
    name: 'American Espresso',
    description: 'Espresso diluted, less intense than traditional',
    photo: 'americano.png',
    price: 9.9,
  },
  {
    id: 3,
    tags: ['traditional'],
    name: 'Creamy Espresso ',
    description: 'espresso traditional coffee with creamy foam',
    photo: 'cremoso.png',
    price: 9.9,
  },
  {
    id: 4,
    tags: ['traditional', 'cold'],
    name: 'Cold Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    photo: 'gelado.png',
    price: 9.9,
  },
  {
    id: 5,
    tags: ['traditional', 'with milk'],
    name: 'Coffee with milk',
    description: 'Half and half traditional espresso with steamed milk',
    photo: 'leite.png',
    price: 9.9,
  },
  {
    id: 6,
    tags: ['traditional', 'with milk'],
    name: 'Latte',
    description:
      'A shot of espresso with twice the amount of milk and creamy foam',
    photo: 'latte.png',
    price: 9.9,
  },
  {
    id: 7,
    tags: ['traditional', 'with milk'],
    name: 'Capuccino',
    description:
      'Cinnamon drink made from equal doses of coffee, milk and foam',
    photo: 'capuccino.png',
    price: 9.9,
  },
  {
    id: 8,
    tags: ['traditional', 'with milk'],
    name: 'Macchiato',
    description: 'Espresso coffee mixed with some hot milk and foam',
    photo: 'macchiato.png',
    price: 9.9,
  },
  {
    id: 9,
    tags: ['traditional', 'with milk'],
    name: 'Mocaccino',
    description: 'Espresso coffee with chocolate syrup, little milk and foam',
    photo: 'mocaccino.png',
    price: 9.9,
  },
  {
    id: 10,
    tags: ['special', 'with milk'],
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    photo: 'chocolate.png',
    price: 9.9,
  },
  {
    id: 11,
    tags: ['special', 'with alchohol', 'cold'],
    name: 'Cuban',
    description: 'Iced espresso coffee drink with rum, cream and mint',
    photo: 'cubano.png',
    price: 9.9,
  },
  {
    id: 12,
    tags: ['special'],
    name: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    photo: 'havaiano.png',
    price: 9.9,
  },
  {
    id: 13,
    tags: ['special'],
    name: 'Arabian',
    description: 'Drink prepared with Arabic coffee beans and spices',
    photo: 'arabe.png',
    price: 9.9,
  },
  {
    id: 14,
    tags: ['special', 'with alchohol'],
    name: 'Irish',
    description: 'Drink with coffee, Irish whiskey, sugar and whipped cream',
    photo: 'irlandes.png',
    price: 9.9,
  },
]
