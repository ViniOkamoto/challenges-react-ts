import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Router from './shared/Router'
import { defaultTheme } from './core/theme/default'
import { GlobalStyle } from './core/theme/global'
import CartContextProvider from './contexts/CartContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
