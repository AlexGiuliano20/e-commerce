import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/Card-Detail/Card-Detail";

const DetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const _apiUrl =
    "https://fake-products-eric.herokuapp.com/api/products/detail";

  useEffect(() => {
    fetch(`${_apiUrl}/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  return <CardDetail item={item} />;
};

export default DetailContainer;
