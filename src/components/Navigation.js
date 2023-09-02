import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/StockUp-React/home">Home</NavLink></li>
        <li><NavLink to="/StockUp-React/stocks">Stocks</NavLink></li>
        <li><NavLink to="/StockUp-React/">Sign-out</NavLink></li>
      </ul>
    </nav>
  )
};

export default Navigation