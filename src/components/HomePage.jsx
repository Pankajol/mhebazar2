import React from 'react';
import Card from './Card';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* First Column with background image */}
      <div className="w-full  bg-cover bg-slate-400  mb-3 rounded">
        <div className="text-base p-4 "><h1 className= '  text-6xl text-white font-bold  '>Streamline your Material
        Handling Equipment with MHE Bazar One-Stop Solutions.</h1>
        </div>
        
        <div className='flex flex-row  justify-end items-end'>
        <div className='flex flex-row mb-56 justify-start items-start '>
        <button className='p-4 m-2 bg-orange-400 text-3xl rounded hover:bg-orange-500 text-white font-bold'>Expolore</button>
        </div>
        <div className='flex flex-row  justify-start items-start '>
        <img className="  " src="/pic1.png" alt="pic" />    
          </div>
        
        </div>
        
        
      </div>
      
      {/* Second Column with background image */}
      <div className="w-full  p-4  ">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/pic1.png" 
            bg="bg-slate-200"
          />
            <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/pic1.png"  
            bg="bg-slate-400"
          />
           <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/pic1.png"  
            bg="bg-indigo-300"
          />
           <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/pic1.png"  
            bg="bg-green-200"
          />
          
          
       
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
