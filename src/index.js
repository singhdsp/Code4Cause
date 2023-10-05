import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import MyPlants from "./Pages/MyPlants";
import Rankings from "./Pages/Rankings";
import Settings from "./Pages/Settings";
import DefaultDash from "./Components/DefaultDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DefaultDash />,
      },
      {
        path: "MyPlants",
        element: <MyPlants />,
      },
      {
        path: "Rankings",
        element: <Rankings />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
