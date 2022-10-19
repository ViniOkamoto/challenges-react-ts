import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../core/lib/axios'
import Transaction from '../models/transaction'
import { createContext } from 'use-context-selector'
import { AxiosResponse } from 'axios'

interface PaginationInterface {
  current: number
  first: number
  next: number
  prev: number
  last: number
}
interface ApiParams {
  q?: string
  page?: number
}
interface TransactionsContextType {
  transactions: Transaction[]
  getTransactions: (params: ApiParams) => void
  createNewTransaction: (data: Transaction) => void
  pagination: PaginationInterface
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
  const [pagination, setPagination] = useState<PaginationInterface>({
    current: 1,
    first: 1,
    next: 0,
    prev: 0,
    last: 1,
  })
  let query = ''

  const extractPagination = useCallback(
    (response: AxiosResponse<any, any>, currentPage: number) => {
      if (response.headers.link as string) {
        const paginationObject = parseLinkHeader(
          response.headers.link as string,
        )
        return setPagination({
          current: currentPage,
          first: getPageNumber(paginationObject.first),
          next: getPageNumber(paginationObject.next),
          prev: getPageNumber(paginationObject.prev),
          last: getPageNumber(paginationObject.last),
        })
      }
      setPagination({
        current: currentPage,
        first: 1,
        next: 0,
        prev: 0,
        last: 1,
      })
    },
    [],
  )

  const getTransactions = useCallback(
    async ({ q, page = 1 }: ApiParams) => {
      if (q !== undefined) {
        query = q
      }
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
          _page: page,
          _limit: 10,
        },
      })
      extractPagination(response, page)
      setTransactions(response.data)
    },
    [extractPagination],
  )

  function parseLinkHeader(linkHeader: string) {
    const linkHeadersArray = linkHeader
      .split(', ')
      .map((header) => header.split('; '))
    const linkHeadersMap = linkHeadersArray.map((header) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
      const thisHeaderUrl = header[0].slice(1, -1)
      return [thisHeaderRel, thisHeaderUrl]
    })
    return Object.fromEntries(linkHeadersMap)
  }

  function getPageNumber(link?: string): number {
    if (!link) {
      return 0
    }
    const params: string = link.split('?')[1]
    const separatedParams: string[] = params.split('&')
    const pageParam = separatedParams.find((p) => p.startsWith('_page'))
    const pageNumber = pageParam!.split('=')[1]
    return Number.parseInt(pageNumber)
  }
  const createNewTransaction = useCallback(async (data: Transaction) => {
    const response = await api.post('transactions', data)
    setTransactions((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    getTransactions({})
    console.log('nem fodendo')
  }, [getTransactions])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        getTransactions,
        createNewTransaction,
        pagination,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
