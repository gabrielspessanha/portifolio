import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage/index.jsx'
import { AboutPage } from './pages/AboutPage/index.jsx'
import { PortfolioPage } from './pages/PortfolioPage/index.jsx'
import { TechnologiesPage } from './pages/TechnologiesPage/index.jsx'
import RootLayoute from './pages/RootLayoute';




const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayoute />,
      children: [
      {
        index: true,
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
      }]
    },
  ])

  export default router