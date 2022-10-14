import { createContext, ReactNode, useEffect, useState } from 'react'
import Transaction from '../models/transaction'

interface TransactionsContextType {
  transactions: Transaction[]
}

export const TransactionContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

interface TransactionContextProps {
  children: ReactNode
}
export default function TransactionsContext({
  children,
}: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function getTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
