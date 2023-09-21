import React from "react";
export const favoriteContext = React.createContext();
//==========================================================

const f = () => {
  console.log("favorite");
};
const favoriteContextProvider = ({ chidren }) => {
  return (
    <favoriteContext.Provider value={f}>{chidren}</favoriteContext.Provider>
  );
};

export default favoriteContextProvider;
