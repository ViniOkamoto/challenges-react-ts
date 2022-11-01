import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { OutletContainer } from './styles'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  )
}
