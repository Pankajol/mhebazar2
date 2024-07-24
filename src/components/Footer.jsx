// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-orange-600 grid grid-flow-col  py-4">
      {/* <div className="container mx-auto bg-slate-400 text-center"> */}
      {/* <img className='w-28' src="/logo.png" alt="" /> */}
      {/* <p className="text-sm">&copy;  All rights reserved.</p> */}

      {/* </div> */}
      <div className="m-2 p-2 text-white ">
        <h1 className="text-2xl m-2 font-bold">Contact-Us</h1>
        <p className="m-2">
          Address: Goregaon Mumbai-400064
        </p>
        <p className="m-2">Phone:+91 9289094445,+91 9840088428</p>
        <p className="m-2">E-mail: sales.1@taron.com,sales.2@taron.com</p>
      </div>
      <div className="m-2  text-white">
        <h1 className="text-2xl m-2 font-bold">Company</h1>
        <div className="flex">
          <ul>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">About</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl "> Used Taron</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Taron Rental</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">
              CMC & AMC Services</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Training</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Contact Us</Link>
            </div>
            
          </ul>
        </div>
      </div>
      <div className="mt-2 text-white">
        <h1 className="text-2xl m-2 font-bold">Category</h1>
        <div className="flex">
          <ul>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Battery</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Pallet Truck</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Stacker</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Platform Truck</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Tow Truck</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Dock Leveller</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Scissors Lift</Link>
            </div>
            <div className="hover:bg-orange-700 rounded-md justify-center items-center">
              <Link to="/page" className="text-xl ">Reach Truck</Link>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
