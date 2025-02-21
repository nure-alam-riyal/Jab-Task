import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'

import router from './Routs/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <div className='bg-background h-screen'>
    <RouterProvider  router={router} />
    </div>
 
  </AuthProvider>
  </StrictMode>,
)
