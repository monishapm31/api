import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Users, BarChart2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav>
        <NavLink to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-700">
          <Home /> Dashboard
        </NavLink>
        <NavLink to="/notifications" className="flex items-center gap-3 p-2 hover:bg-gray-700">
          <Bell /> Notifications
        </NavLink>
        <NavLink to="/users" className="flex items-center gap-3 p-2 hover:bg-gray-700">
          <Users /> Users
        </NavLink>
        <NavLink to="/api-monitoring" className="flex items-center gap-3 p-2 hover:bg-gray-700">
          <BarChart2 /> API Monitoring
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
