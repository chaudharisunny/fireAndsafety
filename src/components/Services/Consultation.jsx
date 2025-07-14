import React from 'react'

function consultation() {
  return (
    <div>
      <section className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image or Illustration */}
        <div>
          <img
            src="https://spsservices.com.au/wp-content/uploads/2022/08/spsservices-services.jpg"
            alt="Consultation"
            className="rounded-lg shadow-xl w-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Expert Fire Safety Consultation</h2>
          <p className="text-lg mb-4 text-gray-300">
            Whether you're setting up a new facility or upgrading your fire safety protocols, our team offers expert
            consultation to ensure you meet all safety and legal requirements.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            From risk assessments to safety training and audit preparation, we’re here to guide you every step of the
            way.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Site evaluations & fire risk analysis</li>
            <li>Fire safety planning & strategy</li>
            <li>Compliance with local fire regulations</li>
            <li>Emergency evacuation protocols</li>
          </ul>
        </div>

        
      </div>
    </section>

    </div>
  )
}

export default consultation
