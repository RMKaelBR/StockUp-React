import React from 'react'
import './App.css';
import StocksIndex from './components/StocksIndex'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {
  // const [stocks, setStocks] = useState([]);

  // useEffect(() => {
  //   // Fetch data from Stockup API
  //   axios.get("https://stock-up-api.onrender.com//stocks")
  //     .then(response => {
  //       setStocks(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <StocksIndex />
  );
}

export default App;
