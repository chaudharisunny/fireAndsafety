import React from "react";
import { TbSettingsStar } from "react-icons/tb";
import { FaFireExtinguisher } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import {Link} from 'react-router-dom'
function Service() {
  return (
    <section className="w-full bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id='service'>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Choose Our Service
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Link to="/Services/Setup" className="block">
              <div className="bg-white h-70  dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-105">
                <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                  <TbSettingsStar className="text-white w-6 h-6" />
                </span>
                <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold tracking-tight">
                  Setup and Installation
                </h3>
                <p className="text-gray-600 dark:text-white mt-2 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                  tenetur quo, dolores doloribus sint at ullam nobis itaque odit.
                </p>
              </div>
          </Link>
          

          {/* Card 2 */}
          <Link to="/Services/CylinderRefelif" className="block">
            <div className="bg-white h-70 dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-105">
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                <FaFireExtinguisher className="text-white w-6 h-6" />
              </span>
              <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold tracking-tight">
                Cylinder Refill & NOC
              </h3>
              <p className="text-gray-600 dark:text-white mt-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, numquam? Velit, voluptate! At quaerat odit aliquid eligendi
               
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/Services/consultation" className="block">
          <div className="bg-white h-70 dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-105">
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
              <HiOutlineUserGroup className="text-white w-6 h-6" />
            </span>
            <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold tracking-tight">
              Consultation
            </h3>
            <p className="text-gray-600 dark:text-white mt-2 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus exercitationem! Molestiae quia ratione
              maxime facilis quis deserunt.
            </p>
          </div>
          </Link>
         

          {/* Card 4 */}
          <Link to='/Services/FirePrevention' className="block">
          <div className="bg-white h-70 dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-105">
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
              <HiOutlineUserGroup className="text-white w-6 h-6" />
            </span>
            <h3 className="text-gray-900 dark:text-white mt-5 text-lg font-semibold tracking-tight">
              Fire Prevention
            </h3>
            <p className="text-gray-600 dark:text-white mt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in modi fugiat
              deleniti quasi tempore facilis ullam ab quo officia repudiandae.
            </p>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;
