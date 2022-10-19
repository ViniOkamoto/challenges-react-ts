import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import dtLogo from '../../assets/images/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import TesteDialog from '../new-transaction-form/components/bottom-sheet'
import NewTransactionForm from '../new-transaction-form'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtLogo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionForm />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
