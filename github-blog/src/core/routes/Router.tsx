import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '../../layouts/default-layout'
import Home from '../../pages/home'
import { routes } from './routes'
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={routes.home} element={<Home />} />
      </Route>
    </Routes>
  )
}
