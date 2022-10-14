import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../core/utils/formatters'
import SearchForm from '../search-form'
import {
  PriceHighlight,
  TransactionTable,
  TranscationContainer,
} from './styles'

export default function TransactionSection() {
  const { transactions } = useContext(TransactionContext)
  return (
    <TranscationContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {`${
                    transaction.type === 'outcome' ? '-' : ''
                  }${priceFormatter.format(transaction.price)}`}
                </PriceHighlight>
              </td>
              <td>{transaction.category.type}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TranscationContainer>
  )
}
