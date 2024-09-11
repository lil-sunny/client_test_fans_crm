import React from "react";
import { Link } from "react-router-dom";

const View404: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-4">
            Oops! Page not found.
          </p>
          <p className="text-lg text-gray-500 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md"
          >
            Try to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View404;
