import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaUser, FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    window.location.reload();
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Projects", path: "/all-projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0b0e1c]/70 backdrop-blur-md shadow-lg border-b border-white/10 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-3xl font-extrabold tracking-wide hover:text-cyan-400 transition duration-300"
        >
          Project<span className="text-cyan-400">Hub</span>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link.path}
                className={`text-sm sm:text-base font-medium px-3 py-1 rounded-md transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <FaUserCircle className="text-white text-2xl cursor-pointer hover:text-cyan-400" />

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg overflow-hidden z-50"
                >
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-100">
                    {user ? (
                      <p className="text-sm font-medium text-gray-800">
                        Hello,{" "}
                        <span className="text-cyan-600">
                          {user.name || "User"}
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600">Welcome, Guest!</p>
                    )}
                  </div>

                  <div className="p-2 space-y-1">
                    {!user ? (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
                        >
                          <FaSignInAlt /> Login
                        </Link>
                        <Link
                          to="/signup"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
                        >
                          <FaUserPlus /> Signup
                        </Link>
                      </>
                    ) : (
                      <>
                        {user.role === "admin" && (
                          <Link
                            to="/admindashboard"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
                          >
                            <FaTachometerAlt /> Admin Dashboard
                          </Link>
                        )}
                       <Link
  to="/profile"
  onClick={() => setDropdownOpen(false)}
  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
>
  <FaUserCircle /> Profile
</Link>

                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition"
                        >
                          <FaSignOutAlt /> Logout
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
