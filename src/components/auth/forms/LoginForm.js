import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSkipLoginClick = () => {
    navigate('/StockUp-React/home');
  }

  const handleLoginClick = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    axios
      .post('https://stock-up-api.onrender.com/sign_in', userData)
      .then((response) => {
        console.log('Authentication from web-hosted API successful, rendering HomePage...')
        navigate('/StockUp-React/home')
      })
      .catch((error) => {
        console.error('Authentication from web-hosted API failed:', error)
        axios
          .post('http://localhost:3000/sign_in', userData)
          .then((response) => {
            console.log('Authentication from locally-hosted API successful, rendering HomePage...')
            navigate('/StockUp-React/home')
          })
          .catch((error) => {
            console.error('Authentication from locally-hosted API failed:', error)
          })
      })
  }

  return (
    <div className="formBody">
      <form className="loginForm">
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={handleLoginClick}>
          Log in
        </button>
      </form>
      <br/>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
              onClick={handleSkipLoginClick}>
        Skip, lmao
      </button>
    </div>
  )
}

export default LoginForm