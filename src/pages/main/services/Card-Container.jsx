import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/Card-List/Card-List";

const CardContainer = () => {
  //guardo los productos en mi estado
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    categoryId
      ? fetch(
          `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
        )
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
            setLoading(false);
          })
      : fetch("https://fake-products-eric.herokuapp.com/api/products")
          .then((res) => res.json())
          .then((res) => {
            setItems(res);
            setLoading(false);
          });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <div>
          <i
            className="pi pi-spin pi-spinner flex justify-content-center mt-8"
            style={{ fontSize: "5em" }}
          ></i>
          <h2 className="text-center">Loading...</h2>
        </div>
      ) : (
        <>
          {!loading && categoryId ? (
            <h2 className="text-center">Conocé nuestras {categoryId}</h2>
          ) : (
            <h2 className="text-center">Articulos</h2>
          )}
          <CardList items={items} />
        </>
      )}
    </div>
  );
};

export default CardContainer;
