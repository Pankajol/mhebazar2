
import React, { useState } from 'react';

const Category = ({ name, subcategories }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-2 cursor-pointer hover:bg-orange-200"><img className=" w-11 h-11"src={`${name}`} alt="" /></div>
      {(isHovered || isOpen) && (
        <div className="absolute left-full top-0 bg-white border rounded shadow-lg">
          {subcategories.map((sub, idx) => (
            <div key={idx} className="p-2 hover:bg-orange-200">
              {sub}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
