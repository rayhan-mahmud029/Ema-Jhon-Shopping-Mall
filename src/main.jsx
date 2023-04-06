import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// routes import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import ErrorPage from './components/ErrorPage/ErrorPage';
import loadAllProducts from './loaders/cartLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: loadAllProducts
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
