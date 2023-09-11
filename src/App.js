import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';
import StocksIndexPage from './components/StocksIndexPage';
import StockPage from './components/StockPage';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import withAuth from './utils/withAuth';
import './App.css';

import ConsoleClearer from './utils/ConsoleClearer';


function App() {    
  return (
    <div>
      <ConsoleClearer />
      <Router>
        <Routes>
          <Route root index path="/StockUp-React" element={<WelcomePage />} />
          <Route path="/StockUp-React/login" element={<LoginPage /> } />
          <Route path="/StockUp-React/signup" element={<SignupPage />} />
          <Route path="/StockUp-React/home" element={withAuth(HomePage)} />
          <Route path="/StockUp-React/users" element={withAuth(UsersPage)} />
          <Route path="/StockUp-React/stocks" element={withAuth(StocksIndexPage)} />
          <Route path="/StockUp-React/stocks/:symbol" element={withAuth(StockPage)} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;