import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useAuth } from '../utils/authContext';

function UsersPage() {
  const navigate = useNavigate();
  const { authData } = useAuth();

  useEffect(() => {
    if (!authData.isAdmin) {
      navigate('/StockUp-React/home');
    }
  }, [authData, navigate])

  return (
    <div>
      <Navigation />
      <h1 className="text-3xl font-bold">Users Page</h1>
    </div>
  )
}

export default UsersPage;