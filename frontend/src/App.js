import React from 'react'
import Home from './components/Home/Home.jsx';
import Login from './components/user/Login.jsx';
import Signup from './components/user/Signup.jsx';
import Cart from './components/Cart/Cart.jsx';
import Products from "./components/product/Poducts.jsx";
import ProductDetails from './components/product/ProductDetails.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';


const App = () => {
  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <><Navbar/><Home/><Footer/></>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/cart",
      element: <><Navbar/><Cart/><Footer/></>,
    },
    {
      path: "/product/:id",
      element: <><Navbar/><ProductDetails/><Footer/></>,
    },
    {
      path: "/products/:keyword",
      element: <><Navbar/><Products/><Footer/></>,
    },
    {
      path: "/products",
      element: <><Navbar/><Products/><Footer/></>,
    },
  ]);
  return (
    <>
       <RouterProvider router={router} />
       {/* <Footer/> */}
    </>
  )
}

export default App
