import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Import your HomePage component
import AllProducts from './components/AllProducts';
import SideMenu from './components/SideMenu';
import ShipingCard from './components/ShipingCard';
// import AboutPage from './components/AboutPage'; 

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const showSideMenu = location.pathname === '/';

  return (
    <div className="flex">
      {showSideMenu && <SideMenu />}
      <div className={`flex-1 ${showSideMenu ? '' : ''} p-4`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<AllProducts />} />
          <Route path="card" element={<ShipingCard />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
