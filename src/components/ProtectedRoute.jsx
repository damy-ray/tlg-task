import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({
  redirectPath = '/',
  children,
}) => {

  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getToken()
  }, [])

  const getToken = () => {
    let savedToken = localStorage.getItem('token');
    if (savedToken) {
      savedToken = JSON.parse(savedToken);
      setToken(savedToken)
    } else {
      navigate('/')
    }
  }

  return children;
};

export default ProtectedRoute;