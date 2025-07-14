import React from 'react'
import {FaEnvelope,FaPhone,FaMapMarkedAlt} from 'react-icons/fa'
function Contact() {
  return (
      <div className="bg-gray-900 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Section */}
          <div className="flex-1 mb-12 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
            <p className="text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-red-600 mr-2" />
              <a
                href="mailto:chaudharisunny6@gmail.com"
                className="hover:underline"
              >
                support@gmail.com
              </a>
            </div>

            <div className="mb-4 mt-4">
              <FaPhone className="inline-block text-red-600 mr-2" />
              <span>+91 94326 902563</span>
            </div>

            <div className="mb-4 mt-4">
              <FaMapMarkedAlt className="inline-block text-red-600 mr-2" />
              <span>Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-600"
                  placeholder="Enter your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-600"
                  placeholder="Enter your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-600"
                  placeholder="Enter your Message"
                ></textarea>
              </div>

              <a 
                href="#"
                className="bg-red-600 text-white w-full md:w-auto transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  
}

export default Contact
