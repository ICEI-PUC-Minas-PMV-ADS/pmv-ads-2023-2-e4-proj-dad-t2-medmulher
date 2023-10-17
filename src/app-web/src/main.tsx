import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import HomePage from './HomePage.tsx'
import Register from './Register.tsx'
import './Login.css'
import './HomePage.css'
import './Register.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)