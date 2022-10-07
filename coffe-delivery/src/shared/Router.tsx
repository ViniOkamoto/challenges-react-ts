import { Routes, Route } from 'react-router-dom'
import CheckoutPage from '../pages/checkout'
import HomePage from '../pages/home'
import DefaultLayout from './layouts/default-layout'
import NotFoundPage from './pages/not-found'
import { routes } from '../core/utils/RoutesPath'
import SucceedOrderPage from '../pages/succeed-order'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.checkout} element={<CheckoutPage />} />
        <Route path={routes.checkoutSucess} element={<SucceedOrderPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
