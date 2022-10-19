import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import {
  PaginationButton,
  PaginationIconButton,
  TransactionPaginationContainer,
} from './styles'

export default function TransactionPagination() {
  const pagination = useContextSelector(TransactionContext, (context) => {
    return context.pagination
  })
  const getTransactions = useContextSelector(TransactionContext, (context) => {
    return context.getTransactions
  })

  function handleOnClickPage(page: number) {
    getTransactions({ page })
  }

  const pageNumbers = getPaginationNumbers()

  function getPaginationNumbers() {
    if (pagination.last <= 3 || pagination.current < 3) {
      return Array.from({ length: pagination.last }, (_, i) => i + 1)
    }
    if (pagination.next === 0) {
      return [pagination.prev, pagination.current]
    }
    return [pagination.prev, pagination.current, pagination.next]
  }

  function handlePrevButton() {
    getTransactions({ page: pagination.prev })
  }

  function handleNextButton() {
    getTransactions({ page: pagination.next })
  }
  return (
    <TransactionPaginationContainer>
      <PaginationIconButton
        disabled={pagination.prev === 0}
        onClick={handlePrevButton}
      >
        <CaretLeft weight="bold" size={24} />
      </PaginationIconButton>
      {pagination.first < pagination.last ? (
        pageNumbers.map((key) => (
          <PaginationButton
            key={key}
            disabled={key === pagination.current}
            onClick={() => {
              handleOnClickPage(key)
            }}
          >
            {key}
          </PaginationButton>
        ))
      ) : (
        <PaginationButton disabled>1</PaginationButton>
      )}
      <PaginationIconButton
        disabled={pagination.last === pagination.current}
        onClick={handleNextButton}
      >
        <CaretRight weight="bold" size={24} />
      </PaginationIconButton>
    </TransactionPaginationContainer>
  )
}
