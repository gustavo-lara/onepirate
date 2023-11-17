import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingIn from './routes/SingIn/SingIn.jsx'
import SingUp from './routes/SingUp/SingUp.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import Forget from "./routes/forget/forget.jsx"
import Terms from "./routes/terms/terms.jsx"
import Priv from "./routes/privacidade/privacidade.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "singin", element: <SingIn /> },
      { path: "singup", element: <SingUp /> },
      { path: "forget", element: <Forget /> },
      { path: "terms", element: <Terms /> },
      { path: "priva", element: <Priv /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
