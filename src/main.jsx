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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Cart from './Components/Dashboard/Cart/Cart';
import UserHome from './Components/Dashboard/UserHome/UserHome.jsX';
import PaymentHistory from './Components/Dashboard/PaymentHistory/PaymentHistory';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AllUsers from './Components/Dashboard/Dashboard/Admin/AllUsers/AllUsers';
import AdminPrivate from './Components/Dashboard/Dashboard/Admin/AdminPrivate/AdminPrivate';
import UpdateItem from './Components/Dashboard/UpdateItem/UpdateItem';
import Payment from './Components/Payment/Payment';
import AddItem from './Components/Dashboard/AddItem/AddItem';
import AdminHome from './Components/Dashboard/Dashboard/Admin/AdminHome/AdminHome';
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
    path : '/payment',
    element : <Payment></Payment>
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
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/my-cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/user-home',
        element: <UserHome></UserHome>

      },
      {
        path: '/dashboard/admin-home',
        element: <AdminHome></AdminHome>

      },
      {
        path: '/dashboard/reservation',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/add-review',
        element: <AddReview></AddReview>
      },
      {
        path: '/dashboard/add-item',
        element: <AddItem></AddItem>
      },
      {
        path: '/dashboard/all-users',
        element: <AdminPrivate><AllUsers></AllUsers></AdminPrivate>
      },
      {
        path : '/dashboard/update/:id',
        element : <UpdateItem></UpdateItem>,
        loader : ({params}) => fetch(`http://localhost:5000/singlemenu/${params.id}`)
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
