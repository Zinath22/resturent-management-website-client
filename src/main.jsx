import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import Routes from './components/Routes/Routes.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider> <RouterProvider router={Routes} /></AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
