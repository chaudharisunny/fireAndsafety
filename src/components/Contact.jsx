import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14">
          Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">Let's Talk</h3>
            <p className="text-gray-300">
              I'm open to freelance work, collaborations, or discussing new projects.
              Let’s get in touch.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center">
                <FaEnvelope className="text-red-600 mr-3" />
                <a
                  href="mailto:chaudharisunny6@gmail.com"
                  className="hover:underline text-gray-200"
                >
                  chaudharisunny6@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-red-600 mr-3" />
                <span>+91 94326 902563</span>
              </div>

              <div className="flex items-center">
                <FaMapMarkedAlt className="text-red-600 mr-3" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 bg-gray-800 rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-red-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-red-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-red-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-8 py-3 rounded-full font-medium w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
