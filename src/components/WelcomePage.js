import React from 'react';
import { NavLink } from 'react-router-dom';
import appLogo from "../assets/stockup.png";
import '../styles/welcome-page.css'


function Navigation() {
  return (
    <div className="Navigation">
      <img src={appLogo} alt="App Logo" />
      <span className="text-2xl">the Stock App.</span>
      <div className="ButtonsDiv">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <NavLink to="/login" style={isActive => ({color: isActive ? "green" : "blue"})}>
              Log-in
          </NavLink>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <NavLink to="/signup" style={isActive => ({color: isActive ? "green" : "blue"})}>
              Sign Up
          </NavLink>
        </button>
      </div>
      
    </div>
  )
};

export default Navigation