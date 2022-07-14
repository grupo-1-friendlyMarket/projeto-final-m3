import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { FiltersContext } from "../../contexts/filters/filters";
import Card from "../CardProduct";
import { Container } from "./styles";

const ProductList = () => {
  const { catalogue } = useContext(CatalogueContext);

  const { filtered, cityFilter } = useContext(FiltersContext);

  return (
    <Container>
      <div className="cardContainer">
      {cityFilter.length > 0
        ? cityFilter.map((item) => <Card key={item.id} item={item} />)
        : filtered.length > 0
        ? filtered.map((item) => <Card key={item.id} item={item} />)
        : catalogue.map((item) => <Card key={item.id} item={item} />)}
        </div>
    </Container>
  );
};

export default ProductList;
