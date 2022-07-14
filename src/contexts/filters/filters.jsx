import { createContext, useContext, useState } from "react";
import { CatalogueContext } from "../catalogue/catalogue";
import { CityContext } from "../localization";

export const FiltersContext = createContext([]);

export const FiltersProvider = ({ children }) => {
  const { catalogue } = useContext(CatalogueContext);

  const [filtered, setFiltered] = useState([]);

  const { inputMunicipio } = useContext(CityContext);

  const filterInputProducts = (input) => {
    let filterList = catalogue.filter((product) =>
      product.category.toLowerCase().includes(input)
    );
    let filterListNome = catalogue.filter((product) =>
      product.productName.toLowerCase().includes(input)
    );

    setFiltered([...filterList, ...filterListNome]);
  };

  const filterProducts = (category) => {
    if (category === "Todos") {
      setFiltered(catalogue);
    } else {
      let filterList = catalogue.filter(
        (product) => product.category === category
      );
      setFiltered(filterList);
    }
  };

  const cityFilter = filtered.filter((item) => {
    return item.city === inputMunicipio;
  });

  return (
    <FiltersContext.Provider
      value={{ filtered, filterInputProducts, filterProducts, cityFilter }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
