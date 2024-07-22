// src/Product.js
import React from 'react';


const Product = ({ image, title, description, price, bg }) => {
  return (
    
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-2 ${bg}`}>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        {/* <p className="text-gray-700 text-base mb-4">{description}</p> */}
        <div className="flex justify-between items-center">
          {/* <span className="text-3xl font-bold text-gray-900">${price}</span> */}
          {/* <button className="p-2 bg-orange-400 text-xl rounded hover:bg-orange-500 text-white font-bold">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
