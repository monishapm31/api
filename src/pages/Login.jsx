import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Government Agency');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation (You can replace with API call)
    if (email && password) {
      alert('Login Successful');
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Government Login</h2>
        <form onSubmit={handleLogin}>
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded mb-4" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
          />

          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded mb-4" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
          />

          <label className="block mb-2">Role</label>
          <select 
            className="w-full p-2 border rounded mb-6" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Government Agency</option>
            <option>Platform Admin</option>
          </select>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
