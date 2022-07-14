import { ContainerMyProducts, StyledH2 } from "./style";
import { CatalogueContext } from "../../contexts/catalogue/catalogue";
import { useContext, useEffect, useState } from "react";
import { CardMyProduct } from "./cardMyProduct";
import Button from '../Button/index';
import { ModalCadastrar } from "./Modals/cadastrarProduto";
import { api } from "../../services/api";


const MyProducts = () => {

  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const { catalogue } = useContext(CatalogueContext);
  const id = JSON.parse(localStorage.getItem("@Market:id"));
  const filteredList = catalogue.filter(elem => elem.userId === 1);

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const CadastrarProduct = () => {
      setShow(true);
  };

  return (
    <ContainerMyProducts>
      <div>
        <StyledH2>Bem vinde, {userData.fullname}!</StyledH2>
        <span>Visualizar seus produtos</span>
      </div>
      <div className="listContainer">
        <ul>
          {filteredList?.map((product, index) => (
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
