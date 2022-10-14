import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './core/theme/theme'
import Router from './core/routes/Router'
import { GlobalStyle } from './core/theme/global'
import TransactionsContext from './contexts/TransactionsContext'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <TransactionsContext>
          <Router />
        </TransactionsContext>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
