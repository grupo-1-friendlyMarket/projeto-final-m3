import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import TheaterComedyOutlinedIcon from "@mui/icons-material/TheaterComedyOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Container, SearchInput } from "./style";
import Button from "../Button";
import { useContext, useState } from "react";
import { FiltersContext } from "../../contexts/filters/filters";

export const Filters = () => {
  const { filterInputProducts, filterProducts } = useContext(FiltersContext);

  const [input, setInput] = useState("");

  return (
    <Container>
      <SearchInput>
        <div>
          <SearchOutlinedIcon />
        </div>
        <input
          placeholder="Ex: Vestuário"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
        <Button
          height={32}
          width={200}
          handlerClick={() => filterInputProducts(input)}
          quadrado
          title="Pesquisar"
        ></Button>
      </SearchInput>
      <div className="buttons">
        <button
          className="SearchButton"
          onClick={() => filterProducts("Todos")}
        >
          <div className="searchImg">
            <StorefrontIcon fontSize="large" />
          </div>
          <span>Todos os produtos</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Esportes")}
        >
          <div className="searchImg">
            <SportsVolleyballIcon fontSize="large" />
          </div>
          <span>Esportes</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Brinquedos")}
        >
          <div className="searchImg">
            <SmartToyOutlinedIcon fontSize="large" />
          </div>
          <span>Brinquedos</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Veiculos")}
        >
          <div className="searchImg">
            <DirectionsCarOutlinedIcon fontSize="large" />
          </div>
          <span>Veículos</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Eletronicos")}
        >
          <div className="searchImg">
            <SmartphoneOutlinedIcon fontSize="large" />
          </div>
          <span>Eletrônicos e celulares</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Hobbies")}
        >
          <div className="searchImg">
            <TheaterComedyOutlinedIcon fontSize="large" />
          </div>
          <span>Hobbies</span>
        </button>
        <button
          className="SearchButton"
          onClick={() => filterProducts("Vestuario")}
        >
          <div className="searchImg">
            <ShoppingBagOutlinedIcon fontSize="large" />
          </div>
          <span>Vestuário</span>
        </button>
      </div>
    </Container>
  );
};
