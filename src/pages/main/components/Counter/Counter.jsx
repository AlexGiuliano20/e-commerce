import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useState } from "react";

const Counter = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    initial < count && setCount(count - 1);
  };

  const agregar = () => {
    onAdd(count);
  };

  const footer = (
    <Button
      label="Add"
      icon="pi pi-shopping-cart"
      className="w-9 text-xl font-semibold mt-3"
      onClick={agregar}
    />
  );

  return (
    <Card footer={footer} className="w-6 mt-5">
      <div className="w-full flex justify-content-between align-items-center">
        <Button label="-" className="text-xl font-semibold" onClick={restar} />
        <span className="text-3xl font-semibold">{count}</span>
        <Button
          label="+"
          className="text-xl font-semibold"
          onClick={aumentar}
        />
      </div>
    </Card>
  );
};

export default Counter;
