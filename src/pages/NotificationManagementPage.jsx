import React, { useState } from 'react';
import { notificationsData } from '../data/notificationsData';

const NotificationManagementPage = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleDelete = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    alert('Notification deleted');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Notifications</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-4">Title</th>
            <th className="border p-4">Category</th>
            <th className="border p-4">Status</th>
            <th className="border p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map(notification => (
            <tr key={notification.id}>
              <td className="border p-4">{notification.title}</td>
              <td className="border p-4">{notification.category}</td>
              <td className="border p-4">{notification.status}</td>
              <td className="border p-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(notification.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationManagementPage;
