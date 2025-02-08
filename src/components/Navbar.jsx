import React from "react";
import logo from "../assets/logo.png"; // ✅ Import the logo
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // Define the linkClass function to style active links
  const linkClass = ({isActive}) => 
    isActive ? 'bg-black text-white hover:text-gray-300 transition duration-300' 
             : 'text-white hover:text-gray-300 transition duration-300';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center">
          <img className="h-10 w-auto" src={logo} alt="React Jobs" />
          <span className="text-white text-xl font-bold ml-2">React Jobs</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {/* Apply linkClass to all NavLinks */}
          <NavLink
            to="/"
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={linkClass} // Call linkClass function here
          >
            Jobs
          </NavLink>
          <NavLink
            to="/add-job"
            className={linkClass} // Call linkClass function here
          >
            Add Job
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
