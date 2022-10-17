import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../core/lib/axios'
import Transaction from '../models/transaction'

interface TransactionsContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => void
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

  async function getTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query,
      },
    })
    setTransactions(response.data)
  }
  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
