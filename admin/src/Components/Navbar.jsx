import React, { useEffect, useState } from 'react';

function decodeToken(token) {
  if (!token) return null;

  const parts = token.split('.');
  if (parts.length !== 3) {
    return null;
  }

  try {
    const payload = parts[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch (error) {
    console.error('Error decoding token manually:', error);
    return null;
  }
}

function Navbar() {
  const [username, setUsername] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.username) {
        setUsername(decoded.username);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center relative">
      <h2 className="text-xl font-semibold text-gray-700">Admin Dashboard</h2>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          <span className="text-gray-700">{username ? username : 'Admin'}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {openDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
            <ul className="py-1">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
