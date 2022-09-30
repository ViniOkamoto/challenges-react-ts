import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { LayoutContainer } from './styles'

interface DefaultLayoutProps {}
export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
