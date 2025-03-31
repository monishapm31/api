import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/notifications/create')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Notification
        </button>
        <button
          onClick={() => navigate('/notifications')}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          View Notifications
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
