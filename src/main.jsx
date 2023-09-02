import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { HomePage } from './pages/HomePage/index.jsx'
import { ContactPage } from './pages/ContactPage/index.jsx'
import { AboutPage } from './pages/AboutPage/index.jsx'
import { PortfolioPage } from './pages/PortfolioPage/index.jsx'
import { TechnologiesPage } from './pages/TechnologiesPage/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'contact',
    element: <ContactPage />
  },
  {
    path: 'portfolio',
    element: <PortfolioPage />
  },
  {
    path: 'about',
    element: <AboutPage/>
  },
  {
    path: 'Technologies',
    element: <TechnologiesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
