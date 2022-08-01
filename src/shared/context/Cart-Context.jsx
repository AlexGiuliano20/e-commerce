import { createContext, useState } from "react";

// Creo el context para poder utilizarlo en otros componentes
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    isInCart(item.id)
      ? alert("Esta en el carrito")
      : setCart([...cart, { ...item, cant }]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
