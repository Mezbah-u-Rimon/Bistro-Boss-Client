import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProviders>
          <div className='max-w-screen-xl mx-auto min-h-screen'>
            <RouterProvider router={router} />
          </div>
        </AuthProviders>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
