import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNotification = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate a loading state
    setLoading(true);
    setError('');
    setSuccessMessage('');

    // Simulate creating the notification
    setTimeout(() => {
      if (title && content) {
        setSuccessMessage('Notification created successfully!');
        setLoading(false);
        // You can navigate to the notifications page if needed
        // navigate('/notifications');
      } else {
        setError('Please fill in all fields.');
        setLoading(false);
      }
    }, 1000);  // Simulate an API delay
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-xl font-semibold mb-4">Create Notification</h3>
      {successMessage && <div className="bg-green-200 text-green-800 p-4 mb-4 rounded">{successMessage}</div>}
      {error && <div className="bg-red-200 text-red-800 p-4 mb-4 rounded">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded-lg ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            {loading ? 'Creating...' : 'Create Notification'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/notifications')}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
