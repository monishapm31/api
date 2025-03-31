import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Users, BarChart2, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">PowerPopAPI</h2>

      <nav className="space-y-4">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'flex items-center gap-4 p-3 bg-blue-500 rounded' : 'flex items-center gap-4 p-3 hover:bg-gray-700 rounded'}>
          <Home /> Dashboard
        </NavLink>
        
        <NavLink to="/notifications" className={({ isActive }) => isActive ? 'flex items-center gap-4 p-3 bg-blue-500 rounded' : 'flex items-center gap-4 p-3 hover:bg-gray-700 rounded'}>
          <Bell /> Notifications
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => isActive ? 'flex items-center gap-4 p-3 bg-blue-500 rounded' : 'flex items-center gap-4 p-3 hover:bg-gray-700 rounded'}>
          <Users /> User Management
        </NavLink>

        <NavLink to="/api-monitoring" className={({ isActive }) => isActive ? 'flex items-center gap-4 p-3 bg-blue-500 rounded' : 'flex items-center gap-4 p-3 hover:bg-gray-700 rounded'}>
          <BarChart2 /> API Monitoring
        </NavLink>

        <button className="flex items-center gap-4 p-3 hover:bg-red-600 rounded mt-auto">
          <LogOut /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
