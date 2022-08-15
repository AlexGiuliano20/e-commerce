import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const apiUrl = "https://fake-products-eric.herokuapp.com/api/orders";

const Form = ({ cart, totalPrice, clearCart }) => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const order = async () => {
    setLoading(true);
    const enviarInfo = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        total: totalPrice,
        user,
        phone,
      }),
    });
    const response = await enviarInfo.json();
    setLoading(false);
    clearCart();
    navigate(`/checkout/${response.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order();
  };

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-column gap-3 pt-2 align-items-center"
    >
      <span className="p-float-label">
        <InputText
          id="username"
          value={user}
          onChange={handleChangeUser}
          placeholder="Ingrese su nombre"
        />
        <label htmlFor="username">Nombre</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="phone"
          value={phone}
          onChange={handleChangePhone}
          placeholder="Ingrese su teléfono"
        />
        <label htmlFor="phone">Teléfono</label>
      </span>
      <Button label={loading ? "Enviando..." : "Enviar"} className="w-3" />
    </form>
  );
};

export default Form;
