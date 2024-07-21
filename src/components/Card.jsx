import React from 'react';

function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 bg-orange-400">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <button className='font-bold text-xl hover:bg-orange-600 rounded mb-2 p-2 text-white '>Explore</button>
      </div>

     
    </div>
  );
}

export default Card;
