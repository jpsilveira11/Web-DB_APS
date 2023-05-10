import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './pages/welcome/index.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
)
