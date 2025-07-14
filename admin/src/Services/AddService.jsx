import React, { useState } from 'react';
import axios from 'axios';

function AddService() {
  const [service, setService] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API URL
      await axios.post('http://localhost:3000/api/newservice', service);
      alert('Service added successfully!');
      setService({ name: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Service Name</label>
          <input
            type="text"
            name="title"
            value={service.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-500 transition-all"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

export default AddService;
