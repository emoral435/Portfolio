import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/Home.tsx'
import './index.css'
import { ToggleDarkMode } from './store/ColorContext/ColorContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToggleDarkMode>
      <App />
    </ToggleDarkMode>
  </React.StrictMode>,
)
