// src/AllProducts.js
import React from 'react';
import Product from './Product';


const AllProducts = () => {
  const products = [
    {
      image: "/battryimg.png",
      title: "Battery",
      description: "This is an amazing product that will solve all your problems.",
      price: "49.99",
      bg: "bg-orange-200"
    },
    {
      image: "/pic1.png",
      title: "Amazing Product 2",
      description: "This is another amazing product that will solve all your problems.",
      price: "59.99",
      bg: "bg-orange-200"
    },
    {
        image: "/image1.png",
        title: "Pallet truck",
        description: "This is another amazing product that will solve all your problems.",
      
        bg: "bg-orange-200"
      },
      {
        image: "/image2.png",
        title: "Manual Paltform Trolly",
        description: "This is another amazing product that will solve all your problems.",
       
        bg: "bg-orange-200"
      },
      {
        image: "/image3.png",
        title: "VNY Truck",
        description: "This is another amazing product that will solve all your problems.",
        
        bg: "bg-orange-200"
      },
      {
        image: "/image4.png",
        title: "Stacker",
        description: "This is another amazing product that will solve all your problems.",
        
        bg: "bg-orange-200"
      },
      {
        image: "/image5.png",
        title: "Scissors Lift",
        description: "This is another amazing product that will solve all your problems.",
        
        bg: "bg-orange-200"
      },
      {
        image: "/image6.png",
        title: "Racking Picker",
        description: "This is another amazing product that will solve all your problems.",
        
        bg: "bg-orange-200"
      },
      {
        image: "/palletimg.png",
        title: "Pallet",
        description: "This is another amazing product that will solve all your problems.",
       
        bg: "bg-orange-200"
      },
     
    
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={index} className="m-4">
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
