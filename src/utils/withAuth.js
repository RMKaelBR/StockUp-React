import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        console.log("User not authenticated. Redirecting to loginpage")
        navigate('/StockUp-React/login');
      }
    }, [isAuthenticated, navigate]);
    

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return <AuthComponent />;
};

export default withAuth;