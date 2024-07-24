import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation
import { LucideHome } from 'lucide-react';
import { ShapesIcon } from 'lucide-react';
import { ShoppingCartIcon } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';

// import { burger } from '@lucide/lab';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccount,setIsAccount] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleAccount =() =>{
    setIsAccount(!isAccount);
  }



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  
  };


  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    };
  }

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
          <div className="cursor-pointer" onClick={handleIconClick}>
        <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600" >All  Categories </button>
      </div>
      {showDropdown && (
        <div ref={dropdownRef} className="absolute top-20  w-48 bg-white border rounded-lg shadow-lg p-4">
          <div><input type="text"  className='w-full text-left px-4 py-2'/></div>
          <hr className="my-2" />
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Battery</button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Platform Truck</button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tow Truck</button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dock Leveller</button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Scissors Lift</button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reach Truck</button>
        </div>
      )}


          <input className='border-none rounded-md p-1' type="text" placeholder=" Search..."/>
          <Link to="/sparepart" className=" text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-orange-600">
          Spare Parts
          </Link>
          <Link to="/Services" className=" text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-orange-600">
          Services
          </Link>
          <Link to="/Contact Us" className=" text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-orange-600">
          Contact Us
          </Link>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
          <LucideHome />
          </Link>
          <Link to="/product" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <ShapesIcon/>
          </Link>
          <Link to="/card" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <ShoppingCartIcon />
          </Link>
          <Link to="/card" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <Heart />
          </Link>
          <button onMouseEnter={toggleAccount} onClick={toggleAccount} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
            <User />
            {isAccount && (
        <div className="absolute right-0 mt-2 w-48 bg-white border items-start rounded-lg shadow-lg gap-2 p-4">
         
<Link to="/My Account"><h1 className='text-black hover:text-orange-400'>My Account</h1></Link>
<Link to="/My Orders"><h1 className='text-black hover:text-orange-400'>My Orders</h1></Link>
<Link to="/My Wishlist"><h1 className='text-black hover:text-orange-400'>My Wishlist</h1></Link>
<Link to="/Login / Signup"><h1 className='text-black hover:text-orange-400'>Login / Signup</h1></Link>
        </div>
      )}
          </button>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
