import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import store from 'src/store'
import 'static/favicon.ico'
import App from './App'
import 'static/lds/assets/icons/custom/custom1.svg'
import 'static/lds/assets/icons/custom/custom1_60.png'
import 'static/lds/assets/images/product1.jpg'
import 'static/images/confetti2.png'
import 'static/images/lds/product2.jpg'

export default () => (
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </>
)
