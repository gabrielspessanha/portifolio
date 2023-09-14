
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage/index.jsx'
import { AboutPage } from './pages/AboutPage/index.jsx'
import { PortfolioPage } from './pages/PortfolioPage/index.jsx'
import { TechnologiesPage } from './pages/TechnologiesPage/index.jsx'
import UserContext from './contexts/UserContext.js'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
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

  const user ={
    name: prompt('Digite seu nome:')
  }

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App
