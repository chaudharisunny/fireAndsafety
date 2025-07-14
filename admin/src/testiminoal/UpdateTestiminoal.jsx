import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTestiminoal() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();
  const [testiminoal, setTestiminoal] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current testiminoal data
    axios.get(`http://localhost:3000/api/updatetestiminoal/${id}`)
      .then((res) => {
        setTestiminoal(res.data.data); // assuming backend sends { data: { ...testiminoal } }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch testiminoal:', err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setTestiminoal({ ...testiminoal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/api/updatetestiminoal/${id}`, testiminoal);
      alert('testiminoal updated successfully!');
      navigate('/reviews/all'); // redirect to testiminoal list
    } catch (error) {
      console.error('Error updating testiminoal:', error);
      alert('Failed to update testiminoal.');
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading testiminoal data...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Update testiminoal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1"> Name</label>
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
          <label className="block text-gray-700 font-medium mb-1">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={testiminoal.occupation}
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
          Update review
        </button>
      </form>
    </div>
  );
}

export default UpdateTestiminoal; 
