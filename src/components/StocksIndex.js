import { useState, useEffect } from 'react';
import axios from 'axios';

const StocksIndex = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch data from Stockup API
    axios.get("https://stock-up-api.onrender.com//stocks")
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Stocks</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>{stock.symbol} - {stock.price.amount} </li>
        ))}
      </ul>
    </div>
  );
}

export default StocksIndex