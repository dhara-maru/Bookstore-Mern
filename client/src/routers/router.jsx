import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Shop from "../Shop/Shop";
import Contact from "../components/Contact";
import About from "../components/About"
import Blog from "../components/Blog"




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children : [{
        path : '/',
        element: <Home></Home>
      },
      {
        path : '/shop',
        element: <Shop></Shop>
      },
    {
      path : '/about',
        element: <About></About>
    },
    {
      path : '/blog',
      element: <Blog></Blog>
    },
    {
      path : '/contact',
      element: <Contact></Contact>
    }]
    },
  ]);


  export default router;