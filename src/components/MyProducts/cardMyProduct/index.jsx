import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ContainerCard } from "./style.js";
import { ModalDelete } from "../Modals/delete/index";
import { useState } from "react";
import { ModalEdit } from "../Modals/editProduto/index.jsx";

export const CardMyProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function deleteProduct() {
    setShow(true);
  }

  function editProduct() {
    setShowEdit(true);
  }

  return (
    <ContainerCard>
      <img className="cardImg" src={product.image} alt={product.description} />
      <div className="containerInfo">
        <span>{product.category}</span>
        <span>{product.productName}</span>
        <p>{product.description}</p>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="containerBtns">
        <EditIcon onClick={() => editProduct()} sx={{ cursor: "pointer" }} />
        <DeleteForeverIcon
          onClick={() => deleteProduct()}
          sx={{ cursor: "pointer" }}
        />
      </div>
      <ModalDelete show={show} setShow={setShow} product={product} />
      <ModalEdit show={showEdit} setShow={setShowEdit} product={product} />
    </ContainerCard>
  );
};
