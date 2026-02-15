import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormspreeProvider } from '@formspree/react'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormspreeProvider project={import.meta.env.VITE_CONTACT_SERVICE_ID || "xeelgjya"}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FormspreeProvider>
  </StrictMode>,
)
