// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { SquarePlus } from 'lucide-react';
import React from 'react';
import Category from './Category';

const categories = [
  {
    name: '/icon/image1.png',

   
    subcategories: [ 'Lithium-Ion Battery', 'Lead-Acid' ,'Traction Battery'],
  },
  {
    name: '/icon/image2.png',
    subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
  },
  {
    name: '/icon/image3.png', 
    subcategories: [ 'Hand Pallet Truck',

        'Stainless Steel Hand Pallet Truck',
        
        'Weighing Scale Hand Pallet Truck',
        
        'Electric Hand Pallet Truck',
        
        'Scissors Hand Pallet Truck'],
  },
  {
    name: '/icon/image4.png',
    subcategories: [
        'Manual Stacker',

        'Manual Platform Stacker',
        
       ' Manual Staddle Leg Stacker',
        
        'Self-Lifting Stacker',
        
        'Semi-Electric Stacker',
        
        'Semi-Electric Staddle Leg Stacker',
        
        'Manual Drum Stacker'],
    },
    {
      name: '/icon/image5.png',
      subcategories: [
    
      ],
    },
    {
      name: '/icon/image6.png',
      subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
    },
    {
      name: '/icon/image7.png',
      subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
    },
    {
      name: '/icon/image8.png',
      subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
    },
    {
      name: '/icon/image9.png',
      subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
    },
    {
      name: '/icon/image10.png',
      subcategories: [
        'Manual Mobile Scissors Lift',
        'Semi-Electric Scissors Lift',
        'Self-Propelled Scissors Lift',
        'Pit Mounted Scissors Lift',
        'Surface Mounted Scissors Lift',
        'Goods Lift',
        'Tandem Scissors Lift',
        'Twin Scissors Lift',
        'Low Profile Scissors Lift',
        'Stainless Steel Scissors Lift',
      ],
    },
  
  // Add more categories as needed
];

// const SideMenu = () => {
  // const [expandedCategory, setExpandedCategory] = useState(null);

  // const handleCategoryClick = (category) => {
  //   setExpandedCategory(expandedCategory === category ? null : category);
  // };

  // return (
  //   <div className="h-screen w-16 m-4  text-white fixed flex justify-center items-stretch ">
  //     <div className="p-4">
  //       <h1 className="text-2xl font-bold mb-4">  <SquarePlus size={56} color="white" /></h1>
  //       <nav>
  //         <ul>
  //           {categories.map((category) => (
  //             <div>
  //               <div key={category.name} className="mb-2">
  //               {/* <Link to={`${category.name}`}
  //                 onClick={() => handleCategoryClick(category.name)}
  //                 className="w-full text-left p-2 rounded focus:outline-none"
  //               > */}
  //                 <img onClick={() => handleCategoryClick(category.name)} src={category.name} alt="" />
  //               {/* </Link> */}
  //               {expandedCategory === category.name && (
  //                 <div className="pl-4 mt-2">
  //                   {category.subcategories.map((sub) => (
  //                     <li key={sub} className="mb-1">
  //                       <Link to={`/product/${sub}`} className="block p-2 hover:bg-orange-600 rounded">
  //                         {sub}
  //                       </Link>
  //                     </li>
  //                   ))}
  //                 </div>
  //               )}
  //             </div>
  //             </div>
  //           ))}
  //         </ul>
  //       </nav>
  //     </div>
  //   </div>
  // );


// const categories = [
//   {
//     name: 'Category 1',
//     subcategories: ['Subcategory 1-1', 'Subcategory 1-2', 'Subcategory 1-3'],
//   },
//   {
//     name: 'Category 2',
//     subcategories: ['Subcategory 2-1', 'Subcategory 2-2', 'Subcategory 2-3'],
//   },
//   // Add more categories as needed
// ];
  const SideMenu = () => {
    return (
      <div className="h-screen  shadow-lg flex flex-col">
        {categories.map((cat, idx) => (
          <Category key={idx} name={cat.name} subcategories={cat.subcategories} />
        ))}
      </div>
    );
};

export default SideMenu;
