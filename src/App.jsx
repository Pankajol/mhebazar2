import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Import your HomePage component
import AllProducts from './components/AllProducts';
// import AboutPage from './AboutPage'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<AllProducts />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
