import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../utils/authContext'

function Navigation() {
  const navigate = useNavigate();
  const { authData, logout } = useAuth();

  const handleSignout = () => {
    axios
      .delete('https://stock-up-api.onrender.com/sign_out')
      .then((response) => {
        console.log('User session on web-hosted API ended, rendering Login...')
        navigate('/StockUp-React/login')
      })
      .catch((error) => {
        console.error('User session deletion on web-hosted API failed:', error)
        axios
          .delete('http://localhost:3000/sign_out')
          .then((response) => {
            console.log('User session on locally-hosted API ended, rendering Login...')
            navigate('/StockUp-React/login')
          })
          .catch((error) => {
            console.error('User session deletion on locally-hosted API failed:', error)
            console.log('Redirecting to login page anyway...')
            navigate('/StockUp-React/login')
          })
      })
    logout();
  }

  return (
    <nav>
      <ul>
        <li><NavLink to="/StockUp-React/home">Home</NavLink></li>
        <li><NavLink to="/StockUp-React/stocks">Stocks</NavLink></li>
        {authData.isAuthenticated && authData.isAdmin && (
          <li><NavLink to="/StockUp-React/users">Users</NavLink></li>
        )}
        <li>
          <button onClick={handleSignout}>Sign-out</button>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation