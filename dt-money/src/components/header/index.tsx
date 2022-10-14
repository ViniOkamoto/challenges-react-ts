import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import dtLogo from '../../assets/images/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../new-transaction-modal'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtLogo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
