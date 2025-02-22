import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'

import router from './Routs/Router.jsx'
import { Toaster } from 'react-hot-toast'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <div className='bg-background h-screen'>
    <RouterProvider  router={router} />
    </div>
 <Toaster />
  </AuthProvider>
    </QueryClientProvider>
  
  </StrictMode>,
)
