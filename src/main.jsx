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
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Cart from './Components/Dashboard/Cart/Cart';
import UserHome from './Components/Dashboard/UserHome/UserHome.jsX';
import Reservation from './Components/Dashboard/Reservation/Reservation';
import PaymentHistory from './Components/Dashboard/PaymentHistory/PaymentHistory';
import AddReview from './Components/Dashboard/AddReview/AddReview';
const queryClient = new QueryClient()
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
  },
  {
    path : '/dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : '/dashboard/my-cart',
        element : <Cart></Cart>
      },
      {
        path : '/dashboard/user-home',
        element : <UserHome></UserHome>

      },
      {
        path : '/dashboard/reservation',
        element : <Reservation></Reservation>
      },
      {
        path : '/dashboard/payment-history',
        element : <PaymentHistory></PaymentHistory>
      },
      {
        path : '/dashboard/add-review',
        element : <AddReview></AddReview>
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='max-w-7xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
