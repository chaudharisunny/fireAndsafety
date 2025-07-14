import React from 'react'

function CylinderRefelif() {
  return (
    <div>
       <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src="https://www.fmins.com/wp-content/uploads/2023/02/fire-prevention.jpg"
            alt="Cylinder Refill Service"
            className="rounded-lg shadow-xl w-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Cylinder Refill & Relief Services</h2>
          <p className="text-lg mb-4 text-gray-300">
            With over <span className="text-red-500 font-semibold">5 years of hands-on experience</span>,
            our expert team has delivered safe and reliable fire extinguisher cylinder refills and emergency relief
            services to residential, commercial, and industrial clients.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            We follow industry safety standards to ensure every cylinder is properly refilled, sealed, pressure-tested,
            and certified. Whether it’s a scheduled refill or urgent relief operation — we act fast, ensuring your safety.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>ABC Dry Powder, CO₂, Foam & Water Cylinder Refill</li>
            <li>Emergency On-Site Cylinder Relief Support</li>
            <li>Inspection, Tagging, and Certification</li>
            <li>Compliance with Fire Department Norms</li>
          </ul>
        </div>

        
      </div>
    </section>

    </div>
  )
}

export default CylinderRefelif
