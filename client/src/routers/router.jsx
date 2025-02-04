import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import SingleItem from "../components/SingleItem";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Cart from "../cart/Cart";
import ProceedToBuy from "../cart/ProceedToBuy";
import OrderPlaced from "../cart/OrderPlaced";
import DashboardLayout from "../dashboard/DashboardLayout";
import EditBook from "../dashboard/EditBook";
import DeleteBook from "../dashboard/DeleteBook";
import EditProduct from "../dashboard/EditProduct";
import DeleteProduct from "../dashboard/DeleteProduct";
import UploadBook from "../dashboard/UploadBook";
import UploadProduct from "../dashboard/UploadProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <SingleItem />,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/books/${params.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch the book data");
          }
          return response.json();
        },
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/proceed-to-buy",
        element: <ProceedToBuy />,
      },
      {
        path: "/order-placed",
        element: <OrderPlaced />,
      },
      {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            ),
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
            path: "edit-book",
            element: <EditBook />,
          },
          {
            path: "delete-book",
            element: <DeleteBook />,
          },
          {
            path: "edit-product",
            element: <EditProduct />,
          },
          {
            path: "delete-product",
            element: <DeleteProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
