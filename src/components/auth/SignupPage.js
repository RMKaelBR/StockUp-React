import React from 'react';
import { NavLink } from 'react-router-dom';


function SignupPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/StockUp-React">Back</NavLink></li>
          <li><NavLink to="/StockUp-React/login">Log-in instead</NavLink></li>
        </ul>
      </nav>
      <h1>Signup Page</h1>
    </div>
    
  );
}

export default SignupPage;