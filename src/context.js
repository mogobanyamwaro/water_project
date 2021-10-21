import React, { useState, useContext, useEffect } from 'react';

import { useCallback } from 'react';

const waterUrl = 'https://fainawaterproject.herokuapp.com/api/water';
const registerUrl = 'https://fainawaterproject.herokuapp.com/api/auth/register';
const loginUrl = 'https://fainawaterproject.herokuapp.com/api/auth/login';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    localStorage.getItem('waterEmail')
      ? JSON.parse(localStorage.getItem('waterEmail'))
      : null
  );
  const [waterDetails, setWaterDetails] = useState([]);
  console.log(user);

  const loginUser = useCallback(async (registerOptions) => {
    setLoading(true);
    try {
      const response = await fetch(loginUrl, registerOptions);
      const data = await response.json();
      localStorage.setItem('waterEmail', JSON.stringify(data.email));

      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const registerUser = async (registerOptions) => {
    setLoading(true);
    try {
      const response = await fetch(registerUrl, registerOptions);
      const data = await response.json();

      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetcchWaterDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(waterUrl);
      console.log(response.json());
      const data = response.json();
      setWaterDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        user,
        waterDetails,
        fetcchWaterDetails,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
