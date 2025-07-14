import React from 'react';
import myprofile from '../assets/pic-3.jpg';

function MyProfile() {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Profile Image */}
        <img
          src={myprofile}
          alt="Vishal Khengar"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />

        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-bold">Vishal Khengar</h3>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum asperiores,
          nemo numquam aliquam, amet laudantium vero quis aliquid fugit quos praesentium eligendi adipisci doloremque?
        </p>
      </div>
    </section>
  );
}

export default MyProfile;
