import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/home'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Global from './styles/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
