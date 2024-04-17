import { useState, useEffect } from 'react';

// Custom hook for authentication
const useAuth = () => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [userID, setuserID] = useState('');

 const baseurl = 'http://localhost:3001'

 // Function to login
 const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseurl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setUser(data);
      // console.log(data._id);
      setuserID(data._id)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
 };

 // Function to register
 const register = async (email, username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseurl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      setUser(data);
      console.log(data);
      setuserID(data._id)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
 };

 // Function to logout
 const logout = () => {
    // Implement logout logic here
    setUser(null);
 };

 return { user, loading, error, userID,login, register, logout };
};

export default useAuth;
