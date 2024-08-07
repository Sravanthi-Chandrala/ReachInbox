import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginPage.css';
import reachinboxLogo from './Assets/ReachInbox_logo.png';
import googleIcon from './Assets/google_icon.svg';

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://accounts.google.com";
  };
  const handleCreateAccount = () => {
    // Navigate to the create account page
    navigate('/create-account');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Navigate to the sign in page
    navigate('/sign-in');
  };

  return (
    <div className="login-container">
      <header className="header">
        <img src={reachinboxLogo} alt="Reachinbox Logo" className="logo" />
      </header>
      <div className="login-box">
        <div className='login-sub-box'>
          <h1>Create a new account</h1>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            Sign Up with Google
          </button>
          <button className="create-btn" onClick={handleCreateAccount}>
            Create an Account
          </button>
          <p className="sign-in">
            Already have an account? <a href="#" onClick={handleSignIn}>Sign in</a>
          </p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Reachinbox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;