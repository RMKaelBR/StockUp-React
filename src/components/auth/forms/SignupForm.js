import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = (
    useState({ email: '', 
              username: '', 
              password: '' , 
              password_confirmation: ''})
    );

  const handleSignupSubmit = async(e) => {
    e.preventDefault();

    if (credentials.password !== credentials.password_confirmation) {
      alert ('Password and Password Confirmation do not match.');
      return;
    }
    try {
      const response = await axios.post('https://stock-up-api.onrender.com/sign_up', {credentials});
      
      if (response) {
        console.log(`In SignUp: ${response.data}`)
        navigate('/StockUp-React/login');;
      }
    } 
    catch (error) {
      console.error('Authentication error on web-hosted API:', error)
      try {
        const response = await axios.post('http://localhost:3000/sign_up', {credentials});
        
        if (response) {
          console.log(`In auth: ${response.data}`)
          navigate('/StockUp-React/login');;
        }
      } 
      catch (error) {
        console.error('Authentication error on local API:', error)
      }
    }
  }

  return (
    <div className="formBody">
      <form className="loginForm" onSubmit={handleSignupSubmit}>
        <div className="inputContainer">
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          name="email"
          autoComplete='off'
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value})}
        />
        <br/>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          name="username"
          autoComplete='off'
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value})}
        />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          name="password"
          autoComplete='off'
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}
        />
        <br/>
        <input
          type="password"
          placeholder="Password Confirmation"
          value={credentials.password_confirmation}
          name="password_confirmation"
          autoComplete='off'
          onChange={(e) => setCredentials({ ...credentials, password_confirmation: e.target.value})}
        />
        <br/>
          
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Sign up
        </button>
      </form>
    </div>
  )
}

export default SignupForm