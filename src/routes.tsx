import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import About from "@pages/About";
import NotFound from "@pages/404";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/about", element: <About /> },
  { path: "/another-about", element: <About /> },
]);

export function Routes() {
  return (
    <>
      <p className="justify-center flex gap-4 m-8">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/not-found">404</a>
      </p>
      <RouterProvider router={router} />
    </>
  );
}

