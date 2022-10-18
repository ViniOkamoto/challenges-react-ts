import {
  dateFormatter,
  priceFormatter,
} from '../../../../core/utils/formatters'
import { PriceHighlight, TransactionTableContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../../../contexts/TransactionsContext'

export default function TransactionTable() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })
  return (
    <TransactionTableContainer>
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
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTableContainer>
  )
}
