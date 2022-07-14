import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setCatalogue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
