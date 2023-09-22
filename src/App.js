import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./App.css";
import AuthContextProvider from "./context/authContext";
import ProductContextProvider from "./context/productContext";
import FavoriteContextProvider from "./context/favoriteContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <FavoriteContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routing />
            </BrowserRouter>
          </FavoriteContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
