import React from "react";
export const productContext = React.createContext();

const b = () => {
  console.log("bb");
};
const ProductContextProvider = ({ children }) => {
  return (
    <productContext.Provider value={b}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
