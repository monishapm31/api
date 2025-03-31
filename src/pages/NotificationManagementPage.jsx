import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import axios from 'axios';

const NotificationManagementPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications (Mock API)
    axios.get('/api/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  const handleDelete = (id) => {
    // Delete Notification (Mock API)
    axios.delete(`/api/notifications/${id}`)
      .then(() => {
        setNotifications(notifications.filter(notification => notification.id !== id));
        alert('Notification deleted');
      })
      .catch(error => console.error('Error deleting notification:', error));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <Header title="Notification Management" />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">All Notifications</h2>

          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <tr key={notification.id} className="border-b">
                    <td className="p-4">{notification.title}</td>
                    <td className="p-4">{notification.category}</td>
                    <td className={`p-4 ${notification.status === 'Published' ? 'text-green-500' : 'text-yellow-500'}`}>{notification.status}</td>
                    <td className="p-4">
                      <button onClick={() => handleDelete(notification.id)} className="text-red-500">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center">No notifications found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotificationManagementPage;
