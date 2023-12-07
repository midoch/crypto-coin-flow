import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-white p-8 rounded-lg shadow-md bg-gray-800">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-300 mb-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="italic text-gray-400 mb-4">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
