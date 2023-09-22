import React from "react";
export const favoriteContext = React.createContext();
//==========================================================

const f = () => {
  console.log("favorite");
};
const FavoriteContextProvider = ({ children }) => {
  return (
    <favoriteContext.Provider value={f}>{children}</favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
