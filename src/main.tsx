import React from 'react'
import { createRoot } from 'react-dom/client'
import { SessionProvider } from 'next-auth/react'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <React.StrictMode>
    <SessionProvider 
      basePath="/.netlify/functions/auth"
      refetchInterval={0}
      refetchOnWindowFocus={true}
    >
      <App />
    </SessionProvider>
  </React.StrictMode>
)