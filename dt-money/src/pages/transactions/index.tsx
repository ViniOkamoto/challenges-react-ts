import Header from '../../components/header'
import SearchForm from '../../components/search-form'
import Summary from '../../components/summary'
import TransactionSection from '../../components/transaction-section'
import { Wrapper } from './styles'

export default function TransactionsPage() {
  return (
    <Wrapper>
      <Header />
      <Summary />
      <TransactionSection />
    </Wrapper>
  )
}
