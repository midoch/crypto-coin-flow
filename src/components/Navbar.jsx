import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link
          to="/"
          className="text-teal-700 text-3xl font-bold transition duration-300 hover:text-teal-300 hover:underline"
        >
          Crypto Coin Flow
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
