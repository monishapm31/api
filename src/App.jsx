import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import NotificationManagementPage from './pages/NotificationManagementPage';
import UserManagementPage from './pages/UserManagementPage';
import APIMonitoringPage from './pages/APIMonitoringPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/notifications" element={<NotificationManagementPage />} />
        <Route path="/users" element={<UserManagementPage />} />
        <Route path="/api-monitoring" element={<APIMonitoringPage />} />
      </Routes>
    </Router>
  );
};

export default App;

















