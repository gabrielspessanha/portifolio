import UserContext from './contexts/UserContext.js'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

function App() {
  
  

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
