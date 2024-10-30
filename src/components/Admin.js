// Admin.js

import React, { useState } from 'react';
import { login, isLoggedIn } from './AdminAuth';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    if (!isLoggedIn()) {
      setError('Invalid username or password');
    } else {
      // Redirect or perform any action upon successful login
      // For example, you can navigate to a different page
      window.location.href = '/Dashboard'; // Redirect to dashboard page
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
