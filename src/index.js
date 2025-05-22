import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/CartContext';
import { CartsProvider } from './contexts/CartsContext';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Components/Home';
import AppAbout from './Components/About';
import AppBlog from './Components/Blog';
import AppServices from './Components/Services';
import Product from './Components/Product';
import AppFeatured from './Components/Featured';
import AppChefs from './Components/Chefs';
import AppContact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Maincomponent/Dashboard';
import DashboardOverview from './Maincomponent/DashboardOverview';
import Products from './Maincomponent/Products';
import Orders from './Maincomponent/Orders';
import Customers from './Maincomponent/Customers';
import AccountSettings from './Maincomponent/AccountSettings';
import ManageUsers from './Maincomponent/ManageUsers';
import ManageOrders from './Maincomponent/ManageOrders';
import Inventory from './Maincomponent/Inventory';
import SalesReports from './Maincomponent/SalesReports';
import Cart from './Maincomponent/Cart';
import ProductDetail from './Maincomponent/ProductDetail';
import ProductDetails from './Components/ProductDetails';
import Carts from './Components/Carts';

// ✅ Correctly wrap everything inside the CartsProvider and CartProvider
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { path: 'about', element: <AppAbout /> },
          { path: 'blog', element: <AppBlog /> },
          { path: 'services', element: <AppServices /> },
          { path: 'featured', element: <AppFeatured /> },
          { path: 'chefs', element: <AppChefs /> },
          { path: 'contact', element: <AppContact /> },
        ],
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/carts',
        element: <Carts />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'products', element: <Products /> },
      { path: 'orders', element: <Orders /> },
      { path: 'customers', element: <Customers /> },
      { path: 'account-settings', element: <AccountSettings /> },
      { path: 'manage-users', element: <ManageUsers /> },
      { path: 'manage-orders', element: <ManageOrders /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'sales-reports', element: <SalesReports /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  {
    path: '/products/:productId',
    element: <ProductDetail />,
  },
]);

// ✅ Wrap RouterProvider with both CartsProvider and CartProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <CartsProvider>
      <RouterProvider router={router} />
    </CartsProvider>
  </CartProvider>
);

reportWebVitals();
