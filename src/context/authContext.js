import axios from "axios";
import React from "react";
export const authContext = React.createContext();
//==========================================================

const AuthContextProvider = ({ children }) => {
  const a = 123424;
  const API = "http://localhost:8000";
  const handleRegister = async (user) => {
    try {
      await axios.post(`${API}/users`, user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ a, handleRegister }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
