import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Back</NavLink></li>
          <li><NavLink to="/signup">Sign-up instead</NavLink></li>
        </ul>
      </nav>
      <h1>Login Page</h1>
    </div>
  );
}

export default LoginPage;