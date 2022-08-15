import { useEffect } from "react";
import { createContext, useState } from "react";

// Creo el context para poder utilizarlo en otros componentes
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalUnidades, setTotalUnidades] = useState(0);

  const addToCart = (item, cant) => {
    isInCart(item.id)
      ? sumarCantidad(item, cant)
      : setCart([...cart, { ...item, cant }]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const sumarCantidad = (item, cant) => {
    const productsUpdate = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          cantidad: prod.cant + cant,
        };
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(productsUpdate);
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = () => {
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count = count + prod.price * prod.cant;
    });
    return setTotalPrice(count);
  };

  const unidades = () => {
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count = count + prod.cant;
    });
    return setTotalUnidades(count);
  };

  useEffect(() => {
    total();
    unidades();
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalUnidades,
        addToCart,
        clearCart,
        deleteOne,
        total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
