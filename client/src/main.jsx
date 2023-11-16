import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingIn from './routes/SingIn/SingIn.jsx'
import SingUp from './routes/SingUp/SingUp.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "singin", element: <SingIn /> },
      { path: "singup", element: <SingUp /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
