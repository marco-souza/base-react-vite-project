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
    <RouterProvider router={router} />
  );
}

