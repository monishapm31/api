import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const [role, setRole] = useState(null);  // Admin or User role
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch user role from local storage or API
    const userRole = localStorage.getItem('userRole'); // Assuming the role is saved here
    setRole(userRole);
    setIsAuthenticated(true); // You can handle authentication logic here
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="dashboard">
      <Sidebar role={role} />
      <div className="dashboard-content">
        <Navbar />
        <div className="content">
          {role === 'admin' ? (
            <AdminDashboard />
          ) : (
            <UserDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ role }) => (
  <div className="sidebar">
    <ul>
      <li>Dashboard</li>
      {role === 'admin' && (
        <>
          <li>User Management</li>
          <li>Notification Management</li>
          <li>API Monitoring</li>
        </>
      )}
      {role !== 'admin' && (
        <>
          <li>Order Management</li>
          <li>Profile</li>
        </>
      )}
    </ul>
  </div>
);

const Navbar = () => (
  <nav>
    <h1>PowerPop Admin Panel</h1>
  </nav>
);

const AdminDashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
    {/* Add admin specific content */}
  </div>
);

const UserDashboard = () => (
  <div>
    <h2>User Dashboard</h2>
    {/* Add user specific content */}
  </div>
);

export default Dashboard;
