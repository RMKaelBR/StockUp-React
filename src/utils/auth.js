import axios from 'axios';

export const authenticateUser = async () => {
  const authToken = localStorage.getItem('authToken');
  
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    return true
  }

  return false;
};