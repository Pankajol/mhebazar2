import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">mhebazar.in</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            Home
          </Link>
          <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            Products
          </Link>
          <Link to="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            Add Card
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
