import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Projects from "./Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/contact",
    element: <Contact />, 
  },
  {
    path: "/projects",
    element: <Projects />, 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;