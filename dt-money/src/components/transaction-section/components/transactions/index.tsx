import {
  dateFormatter,
  priceFormatter,
} from '../../../../core/utils/formatters'
import {
  PriceHighlight,
  TransactionCard,
  TransactionContainer,
  TransactionTableContainer,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { useEffect, useState } from 'react'
import { CalendarBlank, TagSimple } from 'phosphor-react'
import TransactionPagination from '../transaction-pagination'

export default function Transactions() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionContainer>
      {isDesktop ? (
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
      ) : (
        <div>
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id}>
              <span>{transaction.description}</span>
              <PriceHighlight as={'strong'} variant={transaction.type}>
                {`${
                  transaction.type === 'outcome' ? '-' : ''
                }${priceFormatter.format(transaction.price)}`}
              </PriceHighlight>
              <div>
                <div>
                  <TagSimple size={16} />
                  <span>Venda</span>
                </div>
                <div>
                  <CalendarBlank size={16} />
                  <span>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </div>
              </div>
            </TransactionCard>
          ))}
        </div>
      )}
      <TransactionPagination />
    </TransactionContainer>
  )
}
