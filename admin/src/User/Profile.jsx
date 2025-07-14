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
    console.error('Error decoding token:', error);
    return null;
  }
}

const Profile = () => {
  const [userData, setUserData] = useState({ email: '', username: '' });
  const [editMode, setEditMode] = useState(false); // for toggling edit mode
  const [formData, setFormData] = useState({ email: '', username: '' }); // form input data

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserData({
          email: decoded.email,
          username: decoded.username,
        });
        setFormData({
          email: decoded.email,
          username: decoded.username,
        });
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData(formData);
    setEditMode(false);

    // Later here you can send a PUT request to your backend to update user info!
    // axios.put('/api/updateProfile', formData)
  };

  return (
    <div className="flex justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">My Profile</h2>
        
        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="text-gray-500">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-gray-500">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="text-gray-500">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password} 
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-gray-500">Username:</label>
              <p className="text-lg font-semibold">{userData.username}</p>
            </div>
            <div>
              <label className="text-gray-500">Email:</label>
              <p className="text-lg font-semibold">{userData.email}</p>
            </div>
            <div>
              <label className="text-gray-500">Password:</label>
              <p className="text-lg font-semibold">{userData.password}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
