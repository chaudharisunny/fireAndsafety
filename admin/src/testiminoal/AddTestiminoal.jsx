import React, { useState } from 'react';
import axios from 'axios';

function AddTestiminoal() {
  const [testiminoal, setTestiminoal] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setTestiminoal({ ...testiminoal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API URL
      await axios.post('http://localhost:3000/api/newtestiminoal', testiminoal);
      alert('testiminoal added successfully!');
      setTestiminoal({ name: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error adding testiminoal:', error);
      alert('Failed to add testiminoal.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New testiminoal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">testiminoal Name</label>
          <input
            type="text"
            name="name"
            value={testiminoal.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Ocupation</label>
          <input
            type="text"
            name="occupation"
            value={testiminoal.ocupation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={testiminoal.message}
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
          Add testiminoal
        </button>
      </form>
    </div>
  );
}

export default AddTestiminoal
