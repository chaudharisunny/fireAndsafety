import React from 'react'

function FirePrevention() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div>
          <img
            src="https://www.europeanbusinessreview.com/wp-content/uploads/2023/03/Fire-Prevention.jpg"
            alt="Fire prevention training"
            className="rounded-lg shadow-xl w-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Fire Prevention Services</h2>
          <p className="text-lg mb-4 text-gray-300">
            Our team brings <span className="text-red-500 font-semibold">years of hands-on experience</span> in fire
            safety and prevention. We don’t just respond to emergencies — we help you avoid them.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            We conduct thorough assessments and provide smart, customized prevention strategies for homes, offices, and
            industries. Your safety starts with planning.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Fire risk assessments & hazard detection</li>
            <li>Customized fire safety plans for every property</li>
            <li>Smoke detector & sprinkler system setup</li>
            <li>Routine inspection & compliance checks</li>
          </ul>
        </div>

        
      </div>
    </section>
    </div>
  )
}

export default FirePrevention
