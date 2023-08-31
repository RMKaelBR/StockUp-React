import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/stocks">Stocks</NavLink></li>
      </ul>
    </nav>
  )
};

export default Navigation