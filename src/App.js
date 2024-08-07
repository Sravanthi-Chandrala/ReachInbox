import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import CreateAccountPage from './Components/CreateAccountPage';
import OneboxPage from './Components/OneboxPage'; // You'll need to create this component
// import GoogleLoginPage from './GoogleLoginPage'; // You'll need to create this component
import GoogleAuthCallback from './Components/GoogleAuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/onebox" element={<OneboxPage />} />
        <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
