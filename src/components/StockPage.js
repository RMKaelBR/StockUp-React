import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation'

function StockPage() {
  const { symbol } = useParams();

  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState([])
  // useEffect(() => {
  //   // Fetch data from Stockup API
  //   axios.get(`https://stock-up-api.onrender.com/stocks/${symbol}`)
  //     .then(response => {
  //       setStock(response.data);
  //       console.log('Data received from web-hosted API.');
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data from web-hosted API:', error);
  //       setLoading(false);
  //       axios.get(`http://localhost:3000/stocks/${symbol}`)
  //         .then(response => {
  //           setStock(response.data);
  //           console.log('Data received from locally-hosted API.')
  //           setLoading(false);
  //         })
  //         .catch(error => {
  //           console.error('Error fetching data from locally-hosted API:', error);
  //           setLoading(false);
  //         });
  //     });
  // }, [symbol]);
  
  useEffect(() => {
    // Fetch data from Stockup local API
    axios.get(`https://stock-up-api.onrender.com/stocks/${symbol}`)
      .then(response => {
        setStock(response.data);
        console.log('Data received from web-hosted API.')
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data from web-hosted API:', error);
        axios.get(`http://localhost:3000/stocks/${symbol}`)
            .then(response => {
              setStock(response.data);
              console.log('Data received from locally-hosted API.')
              setLoading(false);
            })
            .catch(error => {
              console.error('Error fetching data from locally-hosted API:', error);
              setLoading(false);
            });
      });
  }, [symbol]);

  // console.log(stock)
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl">Stock Details</h1>
      {loading ? (
        <p>Loading...</p>
        ) : (
          <ul>
          {Array.isArray(stock) && stock.map((item, index) => (
          <div key={index}>
            <p><span className="font-bold">Name</span>: {item.name}</p>
            <p><span className="font-bold">Symbol</span>: {item.symbol}</p>
            <p><span className="font-bold">Price</span>: {item.price.amount} {item.price.currency}</p>
            <p><span className="font-bold">Percent Change</span>: {item.percent_change}</p>
            <p><span className="font-bold">Volume</span>: {item.volume}</p>
          </div>
        ))}
        </ul>
      )}
    </div>
  )
}

export default StockPage