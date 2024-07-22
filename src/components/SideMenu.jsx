import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SquarePlus } from 'lucide-react';

const categories = [
  {
    name: 'Battery',

   
    subcategories: [ 'Lithium-Ion Battery', 'Lead-Acid' ,'Traction Battery'],
  },
  {
    name: 'Pallet',
    subcategories: ['Wooden Pallet','Plastic Pallet','Metal Poliet','Other'],
  },
  {
    name: 'Pallet Truck', 
    subcategories: [ 'Hand Pallet Truck',

        'Stainless Steel Hand Pallet Truck',
        
        'Weighing Scale Hand Pallet Truck',
        
        'Electric Hand Pallet Truck',
        
        'Scissors Hand Pallet Truck'],
  },
  {
    name: 'Stacker',
    subcategories: [
        'Manual Stacker',

        'Manual Platform Stacker',
        
       ' Manual Staddle Leg Stacker',
        
        'Self-Lifting Stacker',
        
        'Semi-Electric Stacker',
        
        'Semi-Electric Staddle Leg Stacker',
        
        'Manual Drum Stacker'],
    },
  
  // Add more categories as needed
];

const SideMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="h-screen w-56 m-4 bg-orange-400 text-white fixed flex justify-center items-stretch ">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">  <SquarePlus size={56} color="white" /></h1>
        <nav>
          <ul>
            {categories.map((category) => (
              <li key={category.name} className="mb-2">
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className="w-full text-left p-2 hover:bg-orange-600 rounded focus:outline-none"
                >
                  {category.name}
                </button>
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
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
