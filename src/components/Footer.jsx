// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-orange-300 grid grid-flow-col  py-4">
      {/* <div className="container mx-auto bg-slate-400 text-center"> */}
      {/* <img className='w-28' src="/logo.png" alt="" /> */}
      {/* <p className="text-sm">&copy;  All rights reserved.</p> */}

      {/* </div> */}
      <div className="m-2 p-2 ">
        <h1 className="text-2xl m-2 font-bold">Contact-Us</h1>
        <p className="m-2">
          Address: E-228, Lower Basement, Lajpat Nagar-I, New Delhi-110024
        </p>
        <p className="m-2">Phone:+91 9289094445,+91 9840088428</p>
        <p className="m-2">E-mail: sales.1@abc.com,sales.2@abc.com</p>
      </div>
      <div className="m-2 ">
        <h1 className="text-2xl m-2 font-bold">Company</h1>
        <div className="flex">
          <ul>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">About</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold"> Used MHE</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">MHE Rental</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">
              CMC & AMC Services</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Training</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Contact Us</Link>
            </div>
            
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-2xl m-2 font-bold">Category</h1>
        <div className="flex">
          <ul>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Battery</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Pallet Truck</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Stacker</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Platform Truck</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Tow Truck</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Dock Leveller</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Scissors Lift</Link>
            </div>
            <div className="hover:bg-orange-500 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl font-semibold">Reach Truck</Link>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
