import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import NotificationCard from '../components/NotificationCard';
import GraphSection from '../components/GraphSection';
import QuickActions from '../components/QuickActions';

const DashboardPage = () => {
  const data = {
    totalNotifications: 120,
    pendingNotifications: 15,
    failedNotifications: 5,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <Header title="Dashboard" />

        <div className="p-6 space-y-6">
          {/* Notification Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NotificationCard title="Total Notifications" count={data.totalNotifications} color="blue" />
            <NotificationCard title="Pending Notifications" count={data.pendingNotifications} color="yellow" />
            <NotificationCard title="Failed Notifications" count={data.failedNotifications} color="red" />
          </div>

          {/* Graph Section */}
          <GraphSection />

          {/* Quick Actions */}
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
