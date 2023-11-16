import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import OurMenu from './Components/OurMenu/OurMenu.Jsx';
import OurShop from './Components/OurShop/OurShop';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: '/our-menu',
    element: <OurMenu></OurMenu>
  },
  {
    path: '/our-shop/:category',
    element: <OurShop></OurShop>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register></Register>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
