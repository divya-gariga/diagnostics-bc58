import './storybook.css'
import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'
import theme from '../src/theme/index'
import { MemoryRouter } from 'react-router'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
]
