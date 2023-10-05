import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ForgotPassword from './Pages/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "SignUp",
    element: <SignUp />
  },
  {
    path: "Dashboard",
    element: <Dashboard />
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
