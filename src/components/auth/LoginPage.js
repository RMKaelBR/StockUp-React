import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/StockUp-React/home');
  }
  
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/StockUp-React">Back</NavLink></li>
          <li><NavLink to="/StockUp-React/signup">Sign-up instead</NavLink></li>
        </ul>
      </nav>
      <h1>Login Page</h1>
      <br/>
      <br/>
      <button 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={handleLoginClick}
      >
        Log in Now
      </button>
    </div>
  );
}

export default LoginPage;