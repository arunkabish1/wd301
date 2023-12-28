import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userDataString = localStorage.getItem('userData');
  const navigate = useNavigate();

  if (userDataString === 'undefined' || userDataString === null) {
    return (
      <div className=" flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p>No User Data</p>
        </div>
      </div>
    );
  }

  const userData = JSON.parse(userDataString);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen p-8">
    
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard</h1>
        <button
          id="logout-link"
          onClick={handleLogout}
          className="absolute top-0 right-0 text-white px-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-md focus:outline-none focus:shadow-outline-gray mt-2 mr-2"
        >
          Logout
        </button>
        <div className="text-xl text-gray-800 mb-4">
          <h2 id="name" className="mb-2">
            Name:{userData.name}
          </h2>
          <p id="email ID">Email :{userData.email}</p>
        </div>
      </div>
    
  );
};

export default Dashboard;
