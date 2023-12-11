import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-white p-8 rounded-lg shadow-md bg-gray-800">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! 🚧</h1>
        <p className="text-lg text-gray-300 mb-4">
          It seems like you wandered into uncharted territory.
        </p>
        <p className="text-sm text-gray-400">
          The page you are looking for is not here. Double-check the URL or
          navigate back to safety. 🏡
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
