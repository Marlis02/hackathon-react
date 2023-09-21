import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
