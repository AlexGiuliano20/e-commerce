import CardContainer from "../services/Card-Container";
import { Route, Routes } from "react-router-dom";
import DetailContainer from "../services/Detail-Container";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CardContainer />} />
      <Route path="/category/:categoryId" element={<CardContainer />} />
      <Route path="/detail/:id" element={<DetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout/:idCompra" element={<Checkout />} />
    </Routes>
  );
};

export default Main;
