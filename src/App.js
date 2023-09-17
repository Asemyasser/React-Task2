import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Notfound = lazy(() => import("./Components/Notfound/Notfound"));
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<h1>Loading</h1>}>
              <Home></Home>
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<h1>Loading</h1>}>
              <About></About>
            </Suspense>
          ),
        },
        {
          path: "portfolio",
          element: (
            <Suspense fallback={<h1>Loading</h1>}>
              <Portfolio></Portfolio>
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1>Loading</h1>}>
              <Contact></Contact>
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <Notfound></Notfound>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
