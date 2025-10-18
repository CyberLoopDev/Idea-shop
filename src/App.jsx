import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './store/store'
import { router } from './router/router'

function App() {

  return (
    <ContextProvider >

    
    <RouterProvider router={router}>

    </RouterProvider>
    </ContextProvider>
  )
}

export default App
