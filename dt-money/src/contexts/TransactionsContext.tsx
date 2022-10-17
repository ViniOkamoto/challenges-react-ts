import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../core/lib/axios'
import Transaction from '../models/transaction'

interface TransactionsContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => void
  createNewTransaction: (data: Transaction) => void
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
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createNewTransaction(data: Transaction) {
    const response = await api.post('transactions', data)
    setTransactions((state) => [response.data, ...state])
  }
  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, getTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
