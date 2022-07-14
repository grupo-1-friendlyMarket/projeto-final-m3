import { useContext } from "react";
import { FiltersContext } from "../../contexts/filters/filters";
import Card from "../CardProduct";
import { Container } from "./styles";

const ProductList = () => {
  const { cityFilter } = useContext(FiltersContext);

  return (
    <Container>
      <div className="cardContainer">
        {cityFilter.length > 0 ? (
          cityFilter.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1>Nenhum produto encontrado na sua região</h1>
        )}
      </div>
    </Container>
  );
};

export default ProductList;
