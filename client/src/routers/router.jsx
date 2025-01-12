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
import SingleBook from "../Shop/SingleBook";




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
      path : '/book/:id',
      element: <SingleBook></SingleBook>,
      loader: async ({ params }) => {
        const response = await fetch(`http://localhost:5000/book/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch the book data');
        }
        return response.json(); // Parse the response as JSON
      }
    },
    {
      path : '/contact',
      element: <Contact></Contact>
    }]
    },
  ]);


  export default router;