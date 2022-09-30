import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import DefaultLayout from './layouts/default-layout'
import NotFoundPage from './pages/not-found'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
