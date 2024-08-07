import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        // Store the token in local storage or in your app's state management
        localStorage.setItem('authToken', token);

        // Redirect to the OnboxPage
        navigate('/onbox');
      } else {
        // Handle authentication error
        console.error('Authentication failed');
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>Processing authentication...</div>;
}

export default GoogleAuthCallback;