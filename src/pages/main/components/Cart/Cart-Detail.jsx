import { Card } from "primereact/card";
import { Button } from "primereact/button";

const CartDetail = ({ prod, deleteOne }) => {
  return (
    <div className="w-10 m-auto flex flex-column md:flex-row mt-5 border-1 border-primary">
      <div className="w-full md:w-6 flex m-0 md:m-5 align-items-center">
        <img
          src={prod.img}
          alt={prod.name}
          className="border-circle w-2 hidden md:block border-2 border-primary"
        />
        <p className="text-3xl md:text-5xl font-semibold text-primary text-center w-full">
          {prod.name}
        </p>
      </div>
      <div className="w-full md:w-6 flex align-items-center justify-content-around md:justify-content-between m-0 md:m-4 ">
        <div className="w-6 text-xl md:text-2xl">
          <p>Cantidad: {prod.cant}</p>
          <p>Precio: $ {prod.price}</p>
          <p>Total: $ {prod.price * prod.cant}</p>
        </div>
        <Button label="Eliminar" onClick={() => deleteOne(prod.id)} />
      </div>
    </div>
  );
};

export default CartDetail;
