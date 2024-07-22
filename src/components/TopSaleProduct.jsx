import React from 'react'
import Product from './Product';

function TopSaleProduct() {
    const products = [
     
        {
          image: "/pic1.png",
          title: "Amazing Product 2",
          bg: "bg-blue-200"
        
        },
     
          {
            image: "/image2.png",
            title: "Manual Paltform Trolly",
            bg: "bg-indigo-200"
          
          },
          {
            image: "/image3.png",
            title: "VNY Truck",
            bg: "bg-orange-200"
         
          },
          {
            image: "/image4.png",
            title: "Stacker",
            bg: "bg-green-200"
         
          },
      
          {
            image: "/image6.png",
            title: "Racking Picker",
            bg: "bg-red-200"
       
          },
          {
            image: "/palletimg.png",
            title: "Pallet",
         
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


export default TopSaleProduct