import React from 'react';
import Product from './Product';

function HomeProducts() {
    const products = [
        {
            
          image: "/battryimg.png",
          title: "Battery",
          
        },
        {
            
          image: "/pic1.png",
          title: "Amazing Product 2",
        
        },
        {
            
            image: "/image1.png",
            title: "Pallet truck",
         
          },
          {
            
            image: "/image2.png",
            title: "Manual Paltform Trolly",
          
          },
          {
            
            image: "/image3.png",
            title: "VNY Truck",
         
          },
          {
           
            image: "/image4.png",
            title: "Stacker",
         
          },
          {
            
            image: "/image5.png",
            title: "Scissors Lift",
           
          },
          {
            
            image: "/image6.png",
            title: "Racking Picker",
       
          },
          {
            
            image: "/palletimg.png",
            title: "Pallet",
         
          
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

export default HomeProducts