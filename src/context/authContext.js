import React from "react";
export const authContext = React.createContext();
//==========================================================

const a = () => {
  console.log("aa");
};
const authContextProvider = ({ chidren }) => {
  return <authContext.Provider value={a}>{chidren}</authContext.Provider>;
};

export default authContextProvider;
