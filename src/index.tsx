import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./Routes/About/About";
import App from "./Routes/App";
import ErrorPage from "./Routes/Error/ErrorPage";
import Home from "./Routes/Home/Home";
import Product from "./Routes/Product/Product";
import RecieptPage from "./Routes/RecieptPage/RecieptPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/reciepts",
        element: <RecieptPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
