import { useParams } from "react-router-dom";

const Checkout = () => {
  const { idCompra } = useParams();

  return (
    <div className="flex justify-content-center h-30rem align-items-center">
      Gracias por tu compra, este es tu código para que puedas seguir el envío:
      <span className="ml-2 text-primary">{idCompra}</span>
    </div>
  );
};

export default Checkout;
