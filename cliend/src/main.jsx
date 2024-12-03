import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/index.css'
import App from './App.jsx'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
