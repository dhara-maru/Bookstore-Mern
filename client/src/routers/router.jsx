import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Shop from "../Shop/Shop";
import Contact from "../components/Contact";
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import UploadProduct from "../dashboard/UploadProduct";
import ManageBooks from "../dashboard/ManageBooks";
import Dashboard from "../dashboard/Dashboard";
import EditBooks from "../dashboard/EditBooks";

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
   },
   {
    path: "/admin/dashboard",
    element: <DashboardLayout />, // DashboardLayout as the parent wrapper
    children: [
      {
        index: true, // Default route for "/admin/dashboard"
        element: <Dashboard />,
      },
      {
        path: "upload", // No need to repeat "/admin/dashboard"
        element: <UploadBook />,
      },
      {
        path: "upload-product", // No need to repeat "/admin/dashboard"
        element: <UploadProduct />,
      },
      {
        path: "manage", // Relative to "/admin/dashboard"
        element: <ManageBooks />,
      },
      {
        path: "edit-book/:id",  // Relative path for editing book
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`).then((res) => res.json()),
      },
    ],
  },
],
},
]);

export default router;