import React from 'react'
import Product from './Product';

function TopSaleProduct() {
    const products = [
     
        {
          image: "/spare-parts.png",
          title: "Return Filter",
          description:" Return Filter The return filter is a crucial spare part for hydraulic systems used in material handling equipment ",
          
        
        },
     
          {
            image: "/spare-parts.png",
            title: "Tyre",
            description:" Tyres are one of the essential spare parts for material handling equipment such as forklifts.  ",
           
          
          },
          {
            image: "/spare-parts.png",
            title: "Air Breather ",
            description:" The Air Breather is an essential component of any vehicle's engine system. This spare part is designed to filter the air that enters the engine, preventing contaminants such as dust, dirt, and debris  ",
            
         
          },
          {
            image: "/spare-parts.png",
            description:"  Our Bearing is a precision-made spare part designed for use in industrial machinery. It is engineered to provide maximum durability and reliability ",
            title: "Bearing ",
            
         
          },
      
          {
            image: "/spare-parts.png",
            description:"Our Seal Kit is a high-quality spare part designed to provide a complete solution for repairing and maintaining your equipment.",
            title: "Seal Kit",
            
       
          },
          {
            image: "/spare-parts.png",
            title: "Mast Roller",
            description:" Our Mast Roller is a high-quality spare part designed to provide smooth and reliable operation for your equipment.  ",
           
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