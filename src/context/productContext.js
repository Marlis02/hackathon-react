import React from "react";
export const productContext = React.createContext();

const b = () => {
  console.log("bb");
};
const ProductContextProvider = ({ chidren }) => {
  return <productContext.Provider value={b}>{chidren}</productContext.Provider>;
};

export default ProductContextProvider;
