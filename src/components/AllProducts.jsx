// src/AllProducts.js
import React from 'react';
import Product from './Product';


const AllProducts = () => {
  const products = [
    {
      btnname:"Get Qutes",
      image: "/battryimg.png",
      title: "Battery",
      description: "This is an amazing product that will solve all your problems.",
    bg1:"bg-orange-400",
      bg: "bg-orange-200"
    },
    {
      btnname:"Get Qutes",
      image: "/pic1.png",
      title: "Amazing Product 2",
      description: "This is another amazing product that will solve all your problems.",
     bg1:"bg-orange-400",
      bg: "bg-orange-200"
    },
    {
      btnname:"Get Qutes",
        image: "/image1.png",
        title: "Pallet truck",
        description: "This is another amazing product that will solve all your problems.",
      bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/image2.png",
        title: "Manual Paltform Trolly",
        description: "This is another amazing product that will solve all your problems.",
       bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/image3.png",
        title: "VNY Truck",
        description: "This is another amazing product that will solve all your problems.",
        bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/image4.png",
        title: "Stacker",
        description: "This is another amazing product that will solve all your problems.",
        bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/image5.png",
        title: "Scissors Lift",
        description: "This is another amazing product that will solve all your problems.",
        bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/image6.png",
        title: "Racking Picker",
        description: "This is another amazing product that will solve all your problems.",
        bg1:"bg-orange-400",
        bg: "bg-orange-200"
      },
      {
        btnname:"Get Qutes",
        image: "/palletimg.png",
        title: "Pallet",
        description: "This is another amazing product that will solve all your problems.",
        bg1:"bg-orange-400",
        bg: "bg-orange-200",
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
