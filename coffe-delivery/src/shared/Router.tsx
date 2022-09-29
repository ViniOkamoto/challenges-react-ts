import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import NotFoundPage from './pages/not-found'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
