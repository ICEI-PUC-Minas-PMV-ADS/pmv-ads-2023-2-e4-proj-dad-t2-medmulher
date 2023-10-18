import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import RedefinePassword from './RedefinePassword.tsx'
import HomePage from './HomePage.tsx'
import Doctor from './Doctor.tsx'
import './Login.css'
import './RedefinePassword.css'
import './HomePage.css'
import './Doctor.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Doctor />
  </React.StrictMode>,
)
