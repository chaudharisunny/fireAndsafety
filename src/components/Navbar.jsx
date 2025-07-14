import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/10 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <img src={logo} alt="logo" className="w-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:scale-105">About Us</a></li>
          <li><a href="#service" className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:scale-105">Services</a></li>
          <li><a href="#testimonal" className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:scale-105">Testimonial</a></li>
          <li><a href="#contact" className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:scale-105">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
       
        <CiMenuBurger  className="md:hidden text-red-600 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}/>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 gap-3">
          <a href="#about" className="text-red-600 font-medium">About Us</a>
          <a href="#service" className="text-red-600 font-medium">Services</a>
          <a href="#testimonal" className="text-red-600 font-medium">Testimonial</a>
          <a href="#contact" className="text-red-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
