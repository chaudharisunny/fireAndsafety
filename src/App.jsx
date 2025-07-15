import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Testimonal from './components/Testimonal';
import MyProfile from './components/MyProfile';
import MyFooter from './components/MyFooter';

import Consultation from './components/Services/Consultation';
import CylinderReflif from './components/Services/CylinderRefelif';
import FirePrevention from './components/Services/FirePrevention';
import Setup from './components/Services/Setup';
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Service />
                  <Testimonal />
                  <Contact/>
                  <MyProfile />
                </>
              }
            />
            {/* ✅ Fixed service paths */}
            <Route path="/services/setup" element={<Setup />} />
            <Route path="/services/CylinderRefelif" element={<CylinderReflif />} />
            <Route path="/services/Consultation" element={<Consultation />} />
            <Route path="/services/FirePrevention" element={<FirePrevention />} />

            
            {/* Optional: 404 route */}
            <Route path="*" element={<h1 className="text-white p-10 text-center text-2xl">404 - Page Not Found</h1>} />
          </Routes>
        </div>

        <MyFooter />
      </div>

     
    </Router>
    
    
  );
}

export default App;
