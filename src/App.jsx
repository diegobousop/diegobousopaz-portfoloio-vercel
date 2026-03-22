import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Projects from "./Projects";
import DigitalBrain from "./DigitalBrain";

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
  {
    path: "/digital-brain",
    element: <DigitalBrain />, 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;