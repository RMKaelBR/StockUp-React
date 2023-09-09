import axios from 'axios';

export const authenticateUser = async (credentials) => {
  // return true
  try {
    const response = await axios.post('http://localhost:3000/sign_in', credentials)
    console.log(`In auth: ${response}`)
    if (response) {
      return response;
    }

    return null;
  } catch (error) {
    console.error('Authentication error on local API:', error)
    return null;
  }
}