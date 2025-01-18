import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Shop from "../Shop/Shop";
import Contact from "../components/Contact";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleItem from "../components/SingleItem";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import UploadProduct from "../dashboard/UploadProduct";
import ManageBooks from "../dashboard/ManageBooks";
import Dashboard from "../dashboard/Dashboard";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Cart from "../cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/book/:id",
        element: <SingleItem></SingleItem>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/book/${params.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch the book data");
          }
          return response.json();
        },
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <PrivateRoute><Dashboard /></PrivateRoute>,
          },
          {
            path: "upload",
            element: <UploadBook />,
          },
          {
            path: "upload-product",
            element: <UploadProduct />,
          },
          {
            path: "manage",
            element: <ManageBooks />,
          },
          {
            path: "edit-book/:id",
            element: <EditBooks />,
            loader: async ({ params }) => {
              const response = await fetch(`http://localhost:5000/book/${params.id}`);
              if (!response.ok) {
                throw new Error("Failed to fetch the book data");
              }
              return response.json();
            },
          },
        ],
      },
    ],
  },
]);

export default router;
