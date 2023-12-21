import React, { createContext, useCallback, useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const GlobalContext = createContext();
export const useUser = () => useContext(GlobalContext);
export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  const [state, setState] = useState({});

  const updateState = useCallback((updatedState) => {
    setState((prevState) => ({
      ...prevState,
      ...updatedState,
    }));
  }, []);

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return disconnect; 
  }, [auth]);

  return (
    <GlobalContext.Provider value={{ state, updateState, currentUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
