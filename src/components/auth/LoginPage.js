import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import '../../styles/auth-page.css';


function LoginPage() {
  const navigate = useNavigate();

  const handleSkipLoginClick = () => {
    navigate('/StockUp-React/home');
  }

  const handleLoginClick = () => {
    console.log("Button, clicked.")
  }
  
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/StockUp-React">Back</NavLink></li>
          <li><NavLink to="/StockUp-React/signup">Sign-up instead</NavLink></li>
        </ul>
      </nav>
      <div className="authBody">
        <h1 className="text-3xl font-bold">Login Page</h1>
        <br/>
        <br/>
        <LoginForm />
        <br/>
        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
          onClick={handleSkipLoginClick}
        >
          Skip lol
        </button>
      </div>
    </div>
  );
}

export default LoginPage;