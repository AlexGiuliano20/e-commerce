import IndCard from "../Ind-Card/Ind-Card";

const CardList = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-content-center pb-8 w-10 m-auto">
      {items.map((prod) => (
        <IndCard prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default CardList;
