import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import CartDetail from "./Cart-Detail";
import { CartContext } from "../../../../shared/context/Cart-Context";
import Form from "../Form/Form";

const Cart = () => {
  const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

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
        <p className="text-2xl">Total: $ {totalPrice}</p>
        <div className="flex justify-content-between mr-5">
          <Button label="Eliminar todo" onClick={clearCart} />
          <Button label="Comprar" onClick={() => onClick("displayBasic")} />
        </div>
      </div>
      <Dialog
        header="Comprar"
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
      >
        <Form cart={cart} totalPrice={totalPrice} clearCart={clearCart} />
      </Dialog>
    </div>
  );
};

export default Cart;
