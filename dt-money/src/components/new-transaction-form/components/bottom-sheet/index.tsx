import * as Dialog from '@radix-ui/react-dialog'
import TransactionForm from '../transaction-form'
import { Content, Overlay } from './styles'

export default function BottomSheet() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <TransactionForm />
      </Content>
    </Dialog.Portal>
  )
}
