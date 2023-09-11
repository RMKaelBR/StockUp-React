import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './auth';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuthentication = async() => {
        // const userData = true;
        const userData = await authenticateUser();
      
      if (!userData) {
        console.log("User not authenticated. Redirecting to loginpage...")
        navigate('/StockUp-React/login');
      }
    };

      checkAuthentication();
    }, [navigate]);
    

    return <WrappedComponent {...props} />;
  };

  return <AuthComponent />;
};

export default withAuth;