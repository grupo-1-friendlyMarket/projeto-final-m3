import { MenuItem, TextField } from "@mui/material";
import { useContext } from "react";
import { CityContext } from "../../contexts/localization";
import { Container } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { FiltersContext } from "../../contexts/filters/filters";

const CityFilter = () => {
  const history = useHistory("");
  const { filterProducts } = useContext(FiltersContext);

  const {
    select,
    inputMunicipio,
    handleMunicipio,
    municipios,
    city,
    handleCapacity,
  } = useContext(CityContext);

  const handleClick = () => {
    filterProducts("Todos");
    history.push("/dashboard");
  };

  return (
    <Container>
      <h2>Onde você está agora?</h2>

      <TextField
        id="estado"
        select
        label="Estado"
        value={select}
        onChange={handleCapacity}
        helperText="Por favor selecione o estado"
      >
        {city.map((option) => (
          <MenuItem key={option.id} value={option.sigla}>
            {option.nome}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="cidade"
        select
        label="Cidade"
        value={inputMunicipio}
        onChange={handleMunicipio}
        helperText="Por favor selecione a cidade"
      >
        {municipios.map((option) => (
          <MenuItem key={option.id} value={option.nome}>
            {option.nome}
          </MenuItem>
        ))}
      </TextField>

      <Button
        quadrado={false}
        width={150}
        blue={true}
        title={"Pesquisar"}
        handlerClick={handleClick}
      >
        <SearchIcon />
      </Button>
    </Container>
  );
};

export default CityFilter;
