import SearchForm from '../search-form'
import Transactions from './components/transactions'
import { TranscationContainer } from './styles'

export default function TransactionSection() {
  return (
    <TranscationContainer>
      <SearchForm />
      <Transactions />
    </TranscationContainer>
  )
}
