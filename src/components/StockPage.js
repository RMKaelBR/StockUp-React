import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation'

function StockPage() {
  const { symbol } = useParams();

  const [stock, setStock] = useState([]);

  useEffect(() => {
    // Fetch data from Stockup API
    axios.get(`http://localhost:3000/stocks/${symbol}`)
      .then(response => {
        setStock(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from localhost:', error);
        axios.get(`https://stock-up-api.onrender.com/stocks/${symbol}`)
          .then(response => {
            setStock(response.data);
          })
          .catch(error => {
            console.error('Error fetching data from hosted API:', error);
          });
      });
  }, [symbol]);

  console.log(stock)
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl">Stock Details</h1>
      {stock.map((item, index) => (
        <div key={index}>
          <p><span className="font-bold">Name</span>: {item.name}</p>
          <p><span className="font-bold">Symbol</span>: {item.symbol}</p>
          <p><span className="font-bold">Price</span>: {item.price.amount} {item.price.currency}</p>
          <p><span className="font-bold">Percent Change</span>: {item.percent_change}</p>
          <p><span className="font-bold">Volume</span>: {item.volume}</p>
        </div>
      ))}
    </div>
  )
}

export default StockPage