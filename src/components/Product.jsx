// src/Product.js
import React from 'react';


const Product = ({ image, title, description, price=0, bg ,btnname}) => {
  return (
    
    <div className={`max-w-sm rounded overflow-hidden flex justify-center items-center shadow-lg p-2 `}>
      <img className="w-32 h-32  object-cover" src={image} alt={title} />
      <div className="  justify-center items-center p-4 ">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          {/* <span className="text-3xl font-bold text-gray-900">${price}</span>  */}
           <button className={`p-2 bg-orange-400  rounded hover:bg-orange-500 text-white font-bold`}>
           {btnname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
