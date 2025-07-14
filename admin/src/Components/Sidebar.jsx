import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional: for icons

function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: 'Dashboard', path: '/' },
    {
      name: 'Services',
      dropdown: true,
      children: [
        { name: 'All Service', path: '/services/all' },
        { name: 'Add Service', path: '/services/add' }
       
      ],
    },
    {
      name: 'Reviews',
      dropdown: true,
      children: [
        { name: 'Add Review', path: '/reviews/add' },
        { name: 'All Reviews', path: '/reviews/all' },
      ],
    },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <div className='w-64 h-screen bg-gray-800 text-white p-4'>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            {!item.dropdown ? (
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-400 transition-all ${
                  location.pathname === item.path ? 'bg-gray-700 text-yellow-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <div>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-4 py-2 rounded-md flex justify-between items-center hover:bg-gray-700 hover:text-yellow-400"
                >
                  {item.name}
                  {openDropdown === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openDropdown === item.name && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link
                          to={child.path}
                          className={`block px-4 py-1 rounded-md hover:bg-gray-700 hover:text-yellow-400 ${
                            location.pathname === child.path ? 'bg-gray-700 text-yellow-400' : ''
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
