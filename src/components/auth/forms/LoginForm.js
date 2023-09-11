import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSkipLoginClick = () => {
    navigate('/StockUp-React/home');
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://stock-up-api.onrender.com/sign_in', {
        email: credentials.email,
        password: credentials.password,
      });
      
      if (response) {
        console.log(`In auth: ${response.data}`)
        console.log(response.data.auth_token)
        localStorage.setItem('authToken', response.data.auth_token)
        navigate('/StockUp-React/home');;
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
          console.log(`In auth: ${response.data}`)
          console.log(response.data.auth_token)
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
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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

// const handleLoginClick = (event) => {
  //   event.preventDefault();
  //   const userData = {
  //     email: email,
  //     password: password,
  //   };
  //   axios
  //     .post('http://localhost:3000/sign_in', userData)
  //     .then((response) => {
  //       console.log('Authentication from locally-hosted API successful, rendering HomePage...')
  //       navigate('/StockUp-React/home')
  //     })
  //     .catch((error) => {
  //       console.error('Authentication from locally-hosted API failed:', error)
  //     })
  //   // axios
  //   //   .post('https://stock-up-api.onrender.com/sign_in', userData)
  //   //   .then((response) => {
  //   //     console.log('Authentication from web-hosted API successful, rendering HomePage...')
  //   //     navigate('/StockUp-React/home')
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('Authentication from web-hosted API failed:', error)
  //   //     axios
  //   //       .post('http://localhost:3000/sign_in', userData)
  //   //       .then((response) => {
  //   //         console.log('Authentication from locally-hosted API successful, rendering HomePage...')
  //   //         navigate('/StockUp-React/home')
  //   //       })
  //   //       .catch((error) => {
  //   //         console.error('Authentication from locally-hosted API failed:', error)
  //   //       })
  //   //   })
  // }