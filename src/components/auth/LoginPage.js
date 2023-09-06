import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import '../../styles/auth-page.css';


function LoginPage() {
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
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;