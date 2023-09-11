import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    isAuthenticated: false,
    isAdmin: false,
  });

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    // console.log(`useEffect, isAuthenticated:${authData.isAuthenticated} isAdmin:${authData.isAdmin}`)
    if (authToken && !authData.isAuthenticated) {
      setAuthData({
        ...authData,
        isAuthenticated: true,
      });
    }
  }, [authData]);

  const login = (adminValue) => {
    setAuthData((prevAuthData) => ({
      ...prevAuthData,
      isAdmin: adminValue,
    }));
  };

  const logout = () => {
    setAuthData({
      isAuthenticated: false,
      isAdmin: false,
    });
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
};