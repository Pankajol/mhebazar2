import React from 'react';

function Card({ title, description, imageUrl,bg }) {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-2 ${bg}`}>
     
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <button className='font-bold text-xl hover:bg-orange-500 rounded mb-2 p-2 text-white bg-orange-400 '>Explore</button>
      </div>
      <div className='flex flex-row justify-end items-end'>
      <img className="w-32 h-32" src={imageUrl} alt={title} />
      </div>

     
    </div>
  );
}



export default Card;
