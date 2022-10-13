import { Routes, Route } from 'react-router-dom'
import TransactionsPage from '../../pages/transactions'
import { routes } from './routes'
export default function Router() {
  return (
    <Routes>
      <Route path={routes.transactions} element={<TransactionsPage />} />
    </Routes>
  )
}
