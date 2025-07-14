import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEditNote } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Link } from 'react-router-dom';

function AllServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/allservice')
      .then((res) => {
        console.log("Backend response:", res.data);
        // Make sure the data is an array
        if (Array.isArray(res.data.data)) {
          setServices(res.data.data);
        } else if (Array.isArray(res.data.services)) {
          setServices(res.data.services); // fallback if wrapped inside `services`
        } else {
          console.error("Unexpected response format:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch services:', err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`http://localhost:3000/api/deleteservice/${id}`);
        setServices(services.filter(service => service._id !== id));
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Services</h2>

      {loading ? (
        <p className="text-gray-500">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-gray-500">No services found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td className="py-2 px-4 border-b">{service.title}</td>
                <td className="py-2 px-4 border-b">{service.description}</td>
                <td className="py-2 px-4 border-b flex gap-4">

                <Link to={`/services/edit/${service._id}`}>
                    <MdEditNote className="w-7 h-7 text-blue-500 hover:text-blue-700" />
                </Link>
                  
                   <button onClick={() => handleDelete(service._id)}>
                    <IoMdTrash className="w-7 h-7 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllServices;
