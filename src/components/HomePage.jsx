import React from 'react';
import Card from './Card';
import Footer from './Footer';
// import AllProducts from './AllProducts'
import HomeProducts from './HomeProducts';
import TopSaleProduct from './TopSaleProduct';

function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className="flex flex-col h-auto md:flex-row p-4 gap-4">
      {/* First Column with background image */}
      <div className="w-full h-auto bg-cover bg-slate-400  mb-3 rounded">
        <h1 className='text-green-300 font-bold p-4'>New</h1>
        <div className="text-base p-4 mt-10 "><h1 className= '  text-4xl text-white font-bold  '>Streamline your Material
        Handling Equipment with MHE Bazar One-Stop Solutions.</h1>
        </div>
        
        <div className='flex flex-row  justify-between items-end'>
        <div className='flex flex-row  justify-center items-start '>
        <button className='p-2 m-14 bg-orange-400 text-xl rounded hover:bg-orange-500 text-white font-bold'>Expolore</button>
        </div>
        <div className='flex flex-row   justify-center items-start '>
        <img className="w-65 h-48" src="/pic1.png" alt="pic" />    
          </div>
        
        </div>
        
        
      </div>
      
      {/* Second Column with background image */}
      <div className="w-full  p-4  ">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/image3.png" 
            bg="bg-slate-200"
          />
            <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/image4.png"  
            bg="bg-slate-400"
          />
           <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/image2.png"  
            bg="bg-indigo-300"
          />
           <Card 
            title="Greentech India Manual Drum Trolley 300kg MDT300" 
            description="MHE Bazar is the leading provider of manual drum ." 
            imageUrl="/image1.png"  
            bg="bg-green-200"
          />
          
          
       
        </div>
      </div>
      
      </div>
      <div className=''>
        <div className='shadow p-2'>
          <h1 className='text-2xl font-bold text-orange-400' >Material Handling Equipment Categories</h1>
          <p>Pick the perfect gear from our material handling equipment options.</p>
        </div>
      <HomeProducts />
      </div>
      <div className=''>
        <div className='shadow p-2'>
          <h1 className='text-2xl font-bold text-orange-400' >Top Selling Products</h1>
          <p>Special products in this month.</p>
        </div>
        <TopSaleProduct/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default HomePage;
