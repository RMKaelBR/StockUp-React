import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';

const StocksIndexPage = () => {
  console.log("StocksIndexPage rendered")

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch data from Stockup API
    axios.get("http://localhost:3000/stocks")
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        axios.get("https://stock-up-api.onrender.com/stocks")
          .then(response => {
            setStocks(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  }, []);

  return (
    <div>
      <Navigation />
      <h1 className="text-3xl">Stocks</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            <Link className="stockLink" to={`/StockUp-React/stocks/${stock.symbol}`}> {stock.name}</Link> - {stock.symbol} - {stock.price.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StocksIndexPage