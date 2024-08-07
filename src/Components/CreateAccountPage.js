import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reachinboxLogo from './Assets/ReachInbox_logo.png';
import './CSS/CreateAccountPage.css'; // You'll need to create this CSS file

function CreateAccountPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store the username and password in session storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
  
    // Log the stored values (for demonstration purposes)
    console.log('Stored Username:', sessionStorage.getItem('username'));
    console.log('Stored Password:', sessionStorage.getItem('password'));
  
    // Navigate to the onebox page
    try {
        console.log('Attempting to navigate to /onebox');
      navigate('/onebox');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="create-account-container">
    <header className="header">
    <img src={reachinboxLogo} alt="Reachinbox Logo" className="logo" />
    </header>
    <div className="create-account-box">
      <div className="create-account-sub-box">
        <h1>Create New Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
    <footer className="footer">
      <p>© 2024 sravanthi. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default CreateAccountPage;