import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function MyFooter() {
  return (
     <footer className='bg-gray-900 text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
    
                       <h3 className='text-2xl font-bold mb-2'>NIMEET WORLD SOLUTIONS</h3>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis.</p>
                    </div>
    
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-center'>
                            <input type="email" placeholder='enter email' className='w-full p-2 rounded-l-lg bg-gray-800
                            border border-gray-600 focus:outline-none focus:border-green-400'/>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>subscribe</button>
                        </form>
                    </div>
                </div>
               
                {/* <div className='border-t border-gray-600  flex flex-col md:flex-row
                    justify-between items-center'>
                        
                        <p className='text-gray-400 flex space x-4 my-4 md:my-8'>
                             9843216590
                        </p>
                        <div className='flex space-x-4 my-4 md:my-8'>
                        <p className='text-gray-400 flex space x-4 my-4 md:my-8' >
                             suppoort@gmail.com
                        </p>
                        </div>
                      
                        <div>
                        <p className='text-gray-400 flex space x-4 my-4 md:my-8' >
                             Mandvi surat
                        </p>

                    </div>
                    </div> */}

                <div className='border-t border-gray-600  flex flex-col md:flex-row
                    justify-between items-center'>
                        <p className='text-gray-400'>
                            &copy;{new Date().getFullYear()} sunny. All rights reserved.
                        </p>
                        <div className='flex space-x-4 my-4 md:my-8'>
                        <a href="" className='text-gray-400 hover:text-white'>
                            <FaFacebook/>
                        </a>
    
                        <a href="" className='text-gray-400 hover:text-white'>
                            <FaLinkedin/>
                        </a>
    
                        <a href="" className='text-gray-400 hover:text-white'>
                            <FaGithub/>
                        </a>
                        </div>
                      
                        <div>
                        <a href="" className='text-gray-400 hover:text-white'>
                            privacy
                        </a>
    
                        <a href="" className='text-gray-400 hover:text-white'> Terms of Service</a>
                    </div>
                    </div>
                    
                    
            </div>
            
        </footer>
  )
}

export default MyFooter
