/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerMyProducts, StyledH2 } from "./style";
import { useEffect, useState } from "react";
import { CardMyProduct } from "./cardMyProduct";
import Button from '../Button/index';
import { ModalCadastrar } from "./Modals/cadastrarProduto";
import { api } from "../../services/api";
import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";


const MyProducts = () => {

  const [show, setShow] = useState(false);
  const { catalogue } = useContext(CatalogueContext)
  const [userData, setUserData] = useState({});
  const [userProducts, setUserProducts] = useState({});
  const id = JSON.parse(localStorage.getItem("@Market:id"));
  const filtered = catalogue.filter((item) => item.userId === id)
  
  const CadastrarProduct = () => {
      setShow(true);
  };

  return (
    <ContainerMyProducts>
      <div className="userProductsHeader">
        <StyledH2>Bem vinde !</StyledH2>
        <span>Visualizar seus produtos</span>
      </div>
      <div className="listContainer">
        <ul>
          {filtered?.map((product, index) => (
            <CardMyProduct key={index} product={product}/>
          ))}
        </ul>
      </div>

      <div className="btnRegisterProduct">
        <Button width={200} blue={"blue"} handlerClick={CadastrarProduct} title={"Cadastrar Produto"}></Button>
      </div>
      <ModalCadastrar show={show} setShow={setShow}/>
    </ContainerMyProducts>
  );
};

export default MyProducts;
