import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0e1c]/70 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Title */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:text-cyan-400 transition duration-300">
          ProjectHub
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-pink-400 transition duration-300 font-medium"
          >
            <Link to="/login" className="text-white px-4">Login</Link>
<Link to="/SignUp" className="text-white px-4">Signup</Link>

            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-purple-400 transition duration-300 font-medium"
          >
            <Link to="/adminupload" className="text-white hover:text-purple-400">
  Admin Upload
</Link>

            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
