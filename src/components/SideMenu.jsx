import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SquarePlus } from 'lucide-react';

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
      subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
    },
  
  // Add more categories as needed
];

const SideMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="h-screen w-16 m-4  text-white fixed flex justify-center items-stretch ">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">  <SquarePlus size={56} color="white" /></h1>
        <nav>
          <ul>
            {categories.map((category) => (
              <div>
                <li key={category.name} className="mb-2">
                <Link
                  onClick={() => handleCategoryClick(category.name)}
                  className="w-full text-left p-2 rounded focus:outline-none"
                >
                  <img src={category.name} alt="" />
                </Link>
                {expandedCategory === category.name && (
                  <ul className="pl-4 mt-2">
                    {category.subcategories.map((sub) => (
                      <li key={sub} className="mb-1">
                        <Link to={`/product/${sub}`} className="block p-2 hover:bg-orange-600 rounded">
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
