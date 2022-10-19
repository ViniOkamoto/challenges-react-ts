import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { Controller, useForm } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  TransactionFormContainer,
  TransactionFormWrapper,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
const newTransactionSchema = zod.object({
  description: zod.string().min(1, 'Please write the transaction description'),
  price: zod.number(),
  category: zod.string().min(1, 'Please enter the transaction category'),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionSchema>

export default function TransactionForm() {
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
  const createNewTransaction = useContextSelector(
    TransactionContext,
    (context) => context.createNewTransaction,
  )
  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    createNewTransaction({ ...data, createdAt: new Date().toISOString() })
    reset()
  }
  return (
    <TransactionFormWrapper>
      <Dialog.Title>New Transaction</Dialog.Title>
      <CloseButton>
        <X size={24} />
      </CloseButton>
      <TransactionFormContainer
        onSubmit={handleSubmit(handleCreateNewTransaction)}
      >
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
      </TransactionFormContainer>
    </TransactionFormWrapper>
  )
}
