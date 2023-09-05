import React from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from "../assets/stockup.png";
import '../styles/welcome-page.css';


function Navigation() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/StockUp-React/login');
  }

  const handleSignupClick = () => {
    navigate('/StockUp-React/signup')
  }

  return (
    <div className="Navigation">
      <img className="Logo" src={appLogo} alt="App Logo"/>
      <span className="text-2xl">the Stock App.</span>
      <div className="ButtonsDiv">
        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleLoginClick}
        >
          Log-in
        </button>
        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
      </div>
      
    </div>
  )
};

export default Navigation