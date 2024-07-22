import React from 'react';
import Product from './Product';

function HomeProducts() {
    const products = [
        {
            btnname:"read more",
          image: "/battryimg.png",
          title: "Battery",
          
        },
        {
            btnname:"read more",
          image: "/pic1.png",
          title: "Amazing Product 2",
        
        },
        {
            btnname:"read more",
            image: "/image1.png",
            title: "Pallet truck",
         
          },
          {
            btnname:"read more",
            image: "/image2.png",
            title: "Manual Paltform Trolly",
          
          },
          {
            btnname:"read more",
            image: "/image3.png",
            title: "VNY Truck",
         
          },
          {
            btnname:"read more",
            image: "/image4.png",
            title: "Stacker",
         
          },
          {
            btnname:"read more",
            image: "/image5.png",
            title: "Scissors Lift",
           
          },
          {
            btnname:"read more",
            image: "/image6.png",
            title: "Racking Picker",
       
          },
          {
            btnname:"read more",
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