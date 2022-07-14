import { ContainerMyProducts, StyledH2 } from "./style";
import { useEffect, useState } from "react";
import { CardMyProduct } from "./cardMyProduct";
import Button from "../Button/index";
import { ModalCadastrar } from "./Modals/cadastrarProduto";
import { api } from "../../services/api";

const MyProducts = () => {
  const [show, setShow] = useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const id = JSON.parse(localStorage.getItem("@Market:id"));

  useEffect(() => {
    api
      .get(`products?userId=${id}`)
      .then((res) => {
        setUserProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [userProducts]);

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
          {userProducts?.map((product, index) => (
            <CardMyProduct key={index} product={product} />
          ))}
        </ul>
      </div>

      <div className="btnRegisterProduct">
        <Button
          width={200}
          blue={"blue"}
          handlerClick={CadastrarProduct}
          title={"Cadastrar Produto"}
        ></Button>
      </div>
      <ModalCadastrar show={show} setShow={setShow} />
    </ContainerMyProducts>
  );
};

export default MyProducts;
