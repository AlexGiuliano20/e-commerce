import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

import { CartContext } from "../../context/Cart-Context";

const Header = () => {
  const navigate = useNavigate();
  const { totalUnidades } = useContext(CartContext);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Productos",
      icon: "pi pi-shopping-bag",
      items: [
        {
          label: "Billeteras",
          command: () => {
            navigate("/category/billeteras");
          },
        },
        {
          label: "Camisas",
          command: () => {
            navigate("/category/camisas");
          },
        },
        {
          label: "Gorras",
          command: () => {
            navigate("/category/gorras");
          },
        },
        {
          label: "Remeras",
          command: () => {
            navigate("/category/remeras");
          },
        },

        {
          label: "Riñoneras",
          command: () => {
            navigate("/category/rinoneras");
          },
        },
      ],
    },
  ];

  return (
    <Menubar
      model={items}
      end={
        <Link to={"/cart"}>
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded p-button-outlined"
          />
          <Badge value={totalUnidades === 0 ? null : totalUnidades}  severity="danger"></Badge>
        </Link>
      }
    />
  );
};

export default Header;
