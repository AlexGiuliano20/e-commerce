import { Link, useNavigate } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Header = () => {
  const navigate = useNavigate();

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
        </Link>
      }
    />
  );
};

export default Header;
