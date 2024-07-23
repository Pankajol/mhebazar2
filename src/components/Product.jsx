// src/Product.js
import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ image, title, description, price, bg,bg1 ,btnname}) => {
  return (
    
    <div className={`max-w-sm rounded  overflow-hidden flex justify-center items-center shadow-lg p-2 size-full`}>
      <img className="w-32 h-32  object-cover" src={image} alt={title} />
      <div className="  justify-center items-center p-4 ">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 text-base mb-4">{description} <Link className='p-2 m-2 underline text-orange-600' to="/products">read more</Link></p>
        
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900">{price}</span> 
           <button className={`p-2 rounded  text-white font-bold hover: ${bg}  ${bg1}`}>
           {btnname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
