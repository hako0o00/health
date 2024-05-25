import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage'; 
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUpm';
import SignUpp from './pages/SignUpp';
import Nav from './components/Nav';
import DashP from './pages/DashP'
import DashD from './pages/DashD'
import VisitsP from './pages/VisitsP'
import VisitsD from './pages/VisitsD'
import NewVisit from './pages/NewVisit'
import './App.css';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // Add loader if needed: loader: homePageLoader,
  },
  {
    path: "/Login",
    element: <LogIn />,
    },
  {
    path: "/Signup/Doctor",
    element: <SignUp />,
  },
  {
    path: "/Signup/Patient",
    element: <SignUpp />,
  },
  {
    path: "/DashD",
    element: <DashD />,
  },
  {
    path: "/DashP",
    element: <DashP />,
  },
  {
    path: "/VisitsD",
    element: <VisitsD />,
  },
    {
    path: "/VisitsP",
    element: <VisitsP />,
  },
  
]);

// Getting the root element from the document
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root.

// Render the application
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Nav /> {/* Include Nav inside RouterProvider to make routing context available */}
      <div className="App">
        {/* Main content */}
      </div>
    </RouterProvider>
  </React.StrictMode>
);
