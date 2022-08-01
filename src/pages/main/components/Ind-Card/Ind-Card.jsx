import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ind-card.css";
import { Link } from "react-router-dom";

const IndCard = ({ prod }) => {
  const footer = (
    <div className="flex justify-content-between ">
      <h3>$ {prod.price}</h3>
      <Link to={`/detail/${prod.id}`}>
        <Button
          label="Ver Detalle"
          icon="pi pi-question-circle"
          iconPos="right"
          className="p-button-rounded ml-2 no-underline"
        />
      </Link>
    </div>
  );

  return (
    <Card className="m-5 flex-initial" title={prod.name} footer={footer}>
      <img
        className="w-full lg:h-30rem h-20rem border-round-md"
        src={prod.img}
        alt={prod.name}
      />
    </Card>
  );
};

export default IndCard;
