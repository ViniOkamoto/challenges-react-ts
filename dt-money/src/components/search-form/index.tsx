import { Magnet, MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../contexts/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormType = zod.infer<typeof searchFormSchema>

export default function SearchForm() {
  const getTransactions = useContextSelector(
    TransactionContext,
    (context) => context.getTransactions,
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormType) {
    getTransactions({ q: data.query, page: 1 })
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  )
}
