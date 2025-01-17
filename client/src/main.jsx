import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import router from './routers/router.jsx'
import { Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
//1:26:43 
