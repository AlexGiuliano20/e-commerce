import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../shared/context/Cart-Context";
import Counter from "../../components/Counter/Counter";

const CardDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const onAdd = (cant) => {
    addToCart(item, cant);
    navigate("/cart");
  };

  return (
    <div
      style={{ height: "80rem" }}
      className="w-full flex justify-content-center align-items-center m-auto"
    >
      <div
        style={{ height: "90%" }}
        className="flex flex-column xl:flex-row w-10 border-round-md border-1 border-primary p-5 mb-8"
      >
        <div className="flex w-full xl:w-6">
          <img
            src={item.img}
            alt={item.name}
            className="w-6 md:w-4 xl:w-6 m-auto border-round-md"
          />
        </div>
        <div className="w-full xl:w-6 pl-5 flex flex-column align-items-center text-center m-auto">
          <h1 className="text-5xl font-semibold text-primary">{item.name}</h1>
          <h2># {item.categoria}</h2>
          <span className="text-5xl font-semibold text-left">
            $ {item.price}
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ad
            voluptate unde, commodi architecto veniam dolores accusantium fugit
            excepturi porro asperiores rerum. Minima tempore doloribus vel at
            inventore mollitia exercitationem.
          </p>
          <Counter stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
