import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/StockUp-React">Back</NavLink></li>
          <li><NavLink to="/StockUp-React/signup">Sign-up instead</NavLink></li>
        </ul>
      </nav>
      <h1>Login Page</h1>
    </div>
  );
}

export default LoginPage;