import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage'; // Assuming you have a HomePage component
import VisitPage from './pages/VisitPage';
import LogIn from './pages/LogIn'; // Assuming you have a VisitPage component
import Nav from './components/Nav'; // Assuming you have a Nav component
import './App.css';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // Add loader if needed: loader: homePageLoader,
  },
  {
    path: "/visit",
    element: <VisitPage />,
    // Add loader if needed: loader: visitPageLoader,
  },
  {
    path: "/Login",
    element: <LogIn />,
    // Add loader if needed: loader: visitPageLoader,
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
