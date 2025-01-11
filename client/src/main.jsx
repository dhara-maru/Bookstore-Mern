import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
//1:26:43 
//https://youtu.be/2qWo6W5Wn8Q?si=Lh0p8BnM81ZyNFP3