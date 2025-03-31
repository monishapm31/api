import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import axios from 'axios';

const APIMonitoringPage = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Fetch API monitoring data (Mock API example)
    axios.get('/api/monitoring')
      .then(response => setApiData(response.data))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <Header title="API Monitoring" />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">API Logs</h2>

          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">API Endpoint</th>
                <th className="p-4">Status</th>
                <th className="p-4">Response Time (ms)</th>
                <th className="p-4">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {apiData.length > 0 ? (
                apiData.map((log, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{log.endpoint}</td>
                    <td className={`p-4 ${log.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>{log.status}</td>
                    <td className="p-4">{log.responseTime}</td>
                    <td className="p-4">{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center">No API logs available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default APIMonitoringPage;
