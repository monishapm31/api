import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900">Notifications</button>
        <button className="text-gray-600 hover:text-gray-900">Profile</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Logout</button>
      </div>
    </header>
  );
};

export default Header;
