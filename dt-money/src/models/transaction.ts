export default interface Transaction {
  id?: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
