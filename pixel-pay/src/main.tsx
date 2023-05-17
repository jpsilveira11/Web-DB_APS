import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './pages/welcome/welcome.tsx'
import './scss/bootstrap.scss'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)
