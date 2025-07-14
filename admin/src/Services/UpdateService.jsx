import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateService() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current service data
    axios.get(`http://localhost:3000/api/updateservice/${id}`)
      .then((res) => {
        setService(res.data.data); // assuming backend sends { data: { ...service } }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch service:', err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/api/updateservice/${id}`, service);
      alert('Service updated successfully!');
      navigate('/services/all'); // redirect to service list
    } catch (error) {
      console.error('Error updating service:', error);
      alert('Failed to update service.');
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading service data...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Service</h2>
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
          Update Service
        </button>
      </form>
    </div>
  );
}

export default UpdateService;
