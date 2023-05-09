import { useRouteError } from "react-router-dom";

interface RouteError extends Error {
  statusText: string;
}

export default function NotFound() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="text-center flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-extrabold italic text-pink-400">404</h1>
      <h1 className="text-3xl">Oops, page not found</h1>
      <p className="text-gray-700">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

