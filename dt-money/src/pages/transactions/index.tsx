import Header from '../../components/header'
import SearchForm from '../../components/search-form'
import Summary from '../../components/summary'
import TransactionSection from '../../components/transaction-section'

export default function TransactionsPage() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionSection />
    </div>
  )
}
