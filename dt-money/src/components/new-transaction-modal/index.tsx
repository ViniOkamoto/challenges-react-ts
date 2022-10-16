import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SelectInput from './components/select-input'

const newTransactionSchema = zod.object({
  description: zod.string().min(1, 'Please write the transaction description'),
  price: zod.number().positive('Please inform a value more than 0'),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})
export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <SelectInput />

          <TransactionTypeContainer>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionTypeContainer>
          <button type="submit">Register</button>
        </form>
        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
