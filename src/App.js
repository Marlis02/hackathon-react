import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import FavoriteContextProvider from "./context/favoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductContextProvider from "./context/productContext";
import "./App.css";
import CartContextProvider from "./context/cartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ProductContextProvider>
        <ToastContainer position="top-center" />
        <AuthContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <BrowserRouter>
                <Navbar />
                <Routing />
                <Footer />
              </BrowserRouter>
            </CartContextProvider>
          </FavoriteContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
