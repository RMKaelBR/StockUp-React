import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StocksIndexPage from './components/StocksIndexPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import WelcomePage from './components/WelcomePage';
import StockPage from './components/StockPage';
import './App.css';


function App() {    
  return (
    <Router>
      <Routes>
        <Route root index path="/StockUp-React" element={<WelcomePage />} />
        <Route path="/StockUp-React/login" element={<LoginPage /> } />
        <Route path="/StockUp-React/signup" element={<SignupPage />} />
        <Route path="/StockUp-React/home" element={<HomePage />} />
        <Route path="/StockUp-React/stocks" element={<StocksIndexPage />} />
        <Route path="/StockUp-React/stocks/:symbol" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;