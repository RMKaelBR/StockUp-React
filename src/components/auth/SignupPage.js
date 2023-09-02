import React from 'react';
import { NavLink } from 'react-router-dom';


function SignupPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Back</NavLink></li>
          <li><NavLink to="/login">Log-in instead</NavLink></li>
        </ul>
      </nav>
      <h1>Signup Page</h1>
    </div>
    
  );
}

export default SignupPage;