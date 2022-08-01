import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Main from "./pages/main/components/Main";
import Footer from "./shared/components/Footer/Footer";
import Header from "./shared/components/Header/Header";
import CartProvider from "./shared/context/Cart-Context";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
