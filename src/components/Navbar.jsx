import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-teal-700 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-2xl font-bold transition duration-300 hover:underline"
        >
          Crypto Coin Flow
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/news"
            className="text-white transition duration-300 hover:underline"
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
