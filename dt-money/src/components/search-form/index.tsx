import { Magnet, MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormType = zod.infer<typeof searchFormSchema>

export default function SearchForm() {
  const { getTransactions } = useContext(TransactionContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormType) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    getTransactions(data.query)
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
        Search
      </button>
    </SearchFormContainer>
  )
}
