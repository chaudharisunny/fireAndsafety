import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEditNote } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Link } from 'react-router-dom';
function AllTestiminoal() {
  const [testiminoals, setTestiminoals] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Fetch testiminoals from your backend API
      axios.get('http://localhost:3000/api/alltestiminoal')
      .then((res) => {
        console.log("Backend response:", res.data);
        // Make sure the data is an array
        if (Array.isArray(res.data.data)) {
          setTestiminoals(res.data.data);
        } else if (Array.isArray(res.data.testiminoals)) {
          setTestiminoals(res.data.testiminoals); // fallback if wrapped inside `testiminoalss`
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
          await axios.delete(`http://localhost:3000/api/deletetestiminoal/${id}`);
          setTestiminoals(testiminoals.filter(testiminoals => testiminoals._id !== id));
        } catch (error) {
          console.error("Error deleting testiminoals:", error);
        }
      }
    };
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All testiminoals</h2>
      {loading ? (
        <p className="text-gray-500">Loading testiminoals...</p>
      ) :testiminoals.length === 0 ? (
        <p className="text-gray-500">No testiminoals found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Occupation</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {testiminoals.map((testiminoals) => (
              <tr key={testiminoals._id}>
                <td className="py-2 px-4 border-b">{testiminoals.name}</td>
                <td className="py-2 px-4 border-b">{testiminoals.occupation}</td>
                <td className="py-2 px-4 border-b">{testiminoals.message}</td>
                <td className="py-2 px-4 border-b flex">
                <Link to={`/reviews/edit/${testiminoals._id}`}>
                    <MdEditNote className="w-7 h-7 text-blue-500 hover:text-blue-700" />
                </Link>
                  
                   <button onClick={() => handleDelete(testiminoals._id)}>
                    <IoMdTrash className="w-7 h-7 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AllTestiminoal
