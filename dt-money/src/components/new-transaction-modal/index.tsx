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
import { Controller, useForm } from 'react-hook-form'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

const newTransactionSchema = zod.object({
  description: zod.string().min(1, 'Please write the transaction description'),
  price: zod.number(),
  category: zod.string().min(1, 'Please enter the transaction category'),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionSchema>

export default function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  })
  const { createNewTransaction } = useContext(TransactionContext)
  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    createNewTransaction({ ...data, createdAt: new Date().toISOString() })
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting || !isValid}>
            Register
          </button>
        </form>
        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
