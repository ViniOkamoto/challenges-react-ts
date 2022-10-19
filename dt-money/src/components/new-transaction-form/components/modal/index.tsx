import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'
import TransactionForm from '../transaction-form'

export default function Modal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <TransactionForm />
      </Content>
    </Dialog.Portal>
  )
}
