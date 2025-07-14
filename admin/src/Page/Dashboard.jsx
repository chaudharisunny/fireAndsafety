import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({
    services: 0,
    reviews: 0,
    contacts: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:3000/api/stats')
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  const cards = [
    { label: 'Total Services', count: stats.services, color: 'bg-green-500' },
    { label: 'Total Reviews', count: stats.reviews, color: 'bg-yellow-500' },
    { label: 'Contact Messages', count: stats.contacts, color: 'bg-red-500' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 text-white shadow-md ${card.color}`}
          >
            <h3 className="text-lg font-medium">{card.label}</h3>
            <p className="text-3xl font-bold mt-2">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
