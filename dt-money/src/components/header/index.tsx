import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import dtLogo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtLogo} alt="" />
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
