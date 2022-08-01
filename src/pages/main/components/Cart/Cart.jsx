import { useContext } from "react";

import { Button } from "primereact/button";

import CartDetail from "./Cart-Detail";
import { CartContext } from "../../../../shared/context/Cart-Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, deleteOne } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="w-10 m-auto flex flex-column align-items-center">
        <h1 className="text-3xl md:text-5xl">Tu carrito está vacío</h1>
        <p className="text-base md:text-2xl">
          ¿No sabés qué comprar? <Link to="/">Acá</Link> podés encontrar lo que
          buscás
        </p>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: "8rem" }}>
      {cart.map((prod) => {
        return <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne} />;
      })}
      <div className="mt-4 ml-4">
        <p className="text-2xl">
          Total: $
          {cart.reduce(
            (acumulador, item) =>
              (acumulador = acumulador + item.cant * item.price),
            0
          )}
        </p>
        <Button label="Eliminar todo" onClick={clearCart} />
      </div>
    </div>
  );
};

export default Cart;
