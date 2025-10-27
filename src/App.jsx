import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './store/store'
import { router } from './router/router'
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <ContextProvider >

    
    <RouterProvider router={router}>

    </RouterProvider>
     {/* Контейнер для уведомлений */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable={false}
        limit={4} // максимум 4 уведомления
        toastStyle={{
          marginTop: "10px", // отступ между уведомлениями
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
    </ContextProvider>
  )
}

export default App
