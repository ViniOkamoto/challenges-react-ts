interface Category {
  id: number
  type: string
}

export default interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: Category
  price: number
  createdAt: string
}
