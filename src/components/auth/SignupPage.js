import React from 'react';
import { NavLink } from 'react-router-dom';
import SignupForm from './forms/SignupForm';



function SignupPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/StockUp-React">Back</NavLink></li>
          <li><NavLink to="/StockUp-React/login">Log-in instead</NavLink></li>
        </ul>
      </nav>
      <div className="authBody">
        <h1 className="text-3xl font-bold">Signup Page</h1>
        <br/>
        <SignupForm />
      </div>
      
    </div>
    
  );
}

export default SignupPage;