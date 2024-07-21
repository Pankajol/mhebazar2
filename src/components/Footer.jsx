// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-300 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 mhebazar.in All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="text-orange-600 hover:text-white px-2">Products</a>
          <a href="/services" className="text-orange-600 hover:text-white px-2">Add Card</a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
