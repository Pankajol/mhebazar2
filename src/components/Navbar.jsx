import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation
import { LucideHome } from 'lucide-react';
import { ShapesIcon } from 'lucide-react';
import { ShoppingCartIcon } from 'lucide-react';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
// import { burger } from '@lucide/lab';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-400 p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">
          <Link to="/"><img className="w-28" src="/logo.png" alt="" /></Link>
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
          {/* <Search className="text-white"/> */}
          <input className='border-none rounded-md p-1' type="text" placeholder=" Search..."/>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
          <LucideHome />
          </Link>
          <Link to="/product" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <ShapesIcon/>
          </Link>
          <Link to="/card" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <ShoppingCartIcon />
          </Link>
          <Link to="/cards" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <User />
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
