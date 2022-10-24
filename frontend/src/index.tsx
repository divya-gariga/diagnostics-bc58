import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/index'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      clientId={process.env.CLIENTID!}
      domain={process.env.DOMAIN!}
      redirectUri={window.location.origin}
    >
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('app-root')
)
