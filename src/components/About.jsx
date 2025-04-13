import React from 'react';
import image from '../assets/pic-2.jpg';

function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 md:px-10 lg:px-20" id='about'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="w-full">
          <img
            src={image}
            alt="Fire safety"
            className="w-full h-[300px] md:h-[450px] lg:h-[530px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Safety is Our Priority
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            We provide reliable fire protection solutions to keep your people and property safe.
            <br className="hidden sm:block" />
            Certified fire safety services for homes, offices, and industrial spaces.
            <br className="hidden sm:block" />
            Your trusted partner in fire prevention, protection, and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
