import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StocksIndexPage from './components/StocksIndexPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import WelcomePage from './components/WelcomePage';
import './App.css';


function App() {    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/stocks" element={<StocksIndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
