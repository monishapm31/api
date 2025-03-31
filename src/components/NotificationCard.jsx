import React from 'react';

const NotificationCard = ({ title, count, color }) => {
  const cardColors = {
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${cardColors[color]} flex flex-col items-center`}> 
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-4xl font-bold mt-2">{count}</p>
    </div>
  );
};

export default NotificationCard;
