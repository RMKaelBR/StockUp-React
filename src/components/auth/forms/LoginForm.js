import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../utils/authContext';


function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://stock-up-api.onrender.com/sign_in', {
        email: credentials.email,
        password: credentials.password,
      });
      
      if (response) {
        // console.log(`In auth: ${response.data}`)
        // console.log(response.data.auth_token)
        localStorage.setItem('authToken', response.data.auth_token)
        login(response.data.isAdmin);
        console.log(response.data.isAdmin);
        navigate('/StockUp-React/home');
      }
    }
    catch (error) {
      console.error('Authentication error on web-hosted API:', error)
      try {
        const response = await axios.post('http://localhost:3000/sign_in', {
          email: credentials.email,
          password: credentials.password,
        });
        
        if (response) {
          // console.log(`In auth: ${response.data}`)
          // console.log(response.data.auth_token)
          login(response.data.isAdmin);
          console.log(`In LoginForm, response.data.isAdmin=${response.data.isAdmin}`);
          localStorage.setItem('authToken', response.data.auth_token)
          navigate('/StockUp-React/home');;
        }
      } 
      catch (error) {
        console.error('Authentication error on local API:', error)
      }
    }
  } 

  return (
    <div className="formBody">
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <div className="inputContainer">
          <input  
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="on"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value})}
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}
          />
        </div>
        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Log in
        </button>
      </form>
    </div>
  )
}

export default LoginForm