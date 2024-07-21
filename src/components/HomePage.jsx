import React from 'react';
import Card from './Card';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* First Column with background image */}
      <div className="w-full  p-4 bg-cover " style={{ backgroundImage: 'url(https://www.mhebazar.in/css/asset/image/BYD%20fLT.jpg)' }}>
        <div className="text-base p-4 "><h1 className= '  text-6xl bg-orange-200 opacity-50 '>Streamline your Material
        Handling Equipment with MHE Bazar One-Stop Solutions.</h1></div>
        <button className='p-2 bg-orange-400 text-3xl rounded hover:bg-orange-500 text-white font-bold'>Expolore</button>
      </div>
      
      {/* Second Column with background image */}
      <div className="w-full  p-4 ">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="https://www.mhebazar.in/css/asset/image/Manual-Drum-Trolly.webp" 
          />
            <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="https://www.mhebazar.in/css/asset/image/Manual-Drum-Trolly.webp" 
          />
          
          
       
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
