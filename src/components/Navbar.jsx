import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Crypto Coin Flow</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
