import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/style.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'milligram/dist/milligram.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
