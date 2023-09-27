import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import FavoriteContextProvider from "./context/favoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./context/productContext";
import "./App.css";

function App() {
  return (
    <>
      <ProductContextProvider>
        <ToastContainer position="top-center" />
        <AuthContextProvider>
          <FavoriteContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routing />
              {/* <Footer /> */}
            </BrowserRouter>
          </FavoriteContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
