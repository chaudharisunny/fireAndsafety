import React from 'react'
 
function Setup() {
  return (
    <div>
      <div>
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
          <img
            src='https://media.istockphoto.com/id/2006177264/photo/the-engineer-inspects-the-safety-equipment-on-the-fire-extinguishing-system.jpg?s=2048x2048&w=is&k=20&c=S0G9iusY6tL0bcbxWMcrAIDhdXntQXr9NHMCXhTSIYA='
            alt="Installation team at work"
            className="rounded-lg w-full object-cover shadow-lg transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fire & Safety Installation
          </h1>
          <p className="text-lg text-gray-300">
            With years of hands-on experience, we specialize in designing and installing customized fire safety systems that comply with local fire codes and ensure maximum protection for your property and people.
          </p>
        </div>
        
      </div>

      {/* Experience Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Experience</h2>
        <p className="text-gray-300 text-md">
          For over <span className="text-red-500 font-bold">5+ years</span>, we’ve been a trusted partner in fire safety. From residential buildings to complex industrial zones, we’ve successfully completed <span className="text-red-400 font-bold">100+ installations</span>, always prioritizing precision, compliance, and peace of mind.
        </p>
      </div>

      {/* Services Offered */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'Fire Alarm System Installation',
          'Smoke & Heat Detector Setup',
          'Sprinkler System Installation',
          'Fire Extinguisher Mounting',
          'Emergency Exit Lighting',
          'Control Panel Wiring & Setup',
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition"
          >
            <h4 className="text-xl font-semibold mb-2 text-red-400">{service}</h4>
            <p className="text-gray-400 text-sm">
              Professional installation by certified technicians ensuring optimal placement and system efficiency.
            </p>
          </div>
        ))}
      </div>
    </div>

      </div>
    </div>
  )
}

export default Setup
