import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Loggin from './Components/Loggin/Loggin.jsx';
import Register from './Components/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element: <Loggin></Loggin>
      },
      {
        path: 'register',
        element:<Register></Register>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
