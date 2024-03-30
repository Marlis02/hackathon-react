import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = React.createContext();
//==========================================================

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const API = "http://localhost:8000";

  //===========RGISTER==============
  const handleRegister = async (user) => {
    try {
      await axios.post(`${API}/users`, user);
    } catch (error) {
      console.log(error);
    }
  };

  //===========LOGIN=============

  const getUser = async () => {
    try {
      const { data } = await axios("http://localhost:8000/users");
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //=============lOGOUT========
  const handleLogout = (navigate) => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <authContext.Provider
      value={{ handleRegister, getUser, userData, handleLogout }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
