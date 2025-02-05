import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: grey[900],
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
