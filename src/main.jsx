import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import MainRoutes from './routes/MainRoutes.jsx'
import ThemeProvider from './providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </ThemeProvider>,
)
