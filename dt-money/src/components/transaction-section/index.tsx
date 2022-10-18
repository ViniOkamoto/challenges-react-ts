import SearchForm from '../search-form'
import TransactionTable from './components/transaction-table'
import { TranscationContainer } from './styles'

export default function TransactionSection() {
  return (
    <TranscationContainer>
      <SearchForm />
      <TransactionTable />
    </TranscationContainer>
  )
}
