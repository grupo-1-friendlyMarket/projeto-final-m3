import { BackGroundModal, Modal, StyledForm, StyledBtnCadastro } from "./style";
import Button from "../../../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../../../services/api";

export const ModalEdit = ({ show, setShow, product }) => {
  function handleSair() {
    setShow(false);
  }

  const token = JSON.parse(localStorage.getItem("@Market:token"));
  const userId = JSON.parse(localStorage.getItem("@Market:id"));

  const schema = yup.object().shape({
    productName: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
    image: yup
      .string()
      .matches(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
        { message: "Link inválido", excludeEmptyString: true }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const editarProduto = (data) => {
    const { image, productName, description, price, city, category } = data;

    const editedProduct = {
      image,
      productName,
      description,
      price,
      city,
      category,
      userId,
    };

    api
      .patch(`/products/${userId}`, editedProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Produto editado com sucesso!");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <BackGroundModal show={show}>
      <Modal show={show}>
        <StyledForm onSubmit={handleSubmit(editarProduto)}>
          <h2>Edite seu Produto</h2>
          <p>Atualize seu produto, é rapido e fácil!</p>

          <label>
            Nome
            <input
              type="text"
              {...register("productName")}
              placeholder={product.productName}
            />
          </label>
          {errors.productName && (
            <span className="error"> {errors.productName.message}</span>
          )}

          <label>
            Cidade
            <input
              type="text"
              {...register("city")}
              placeholder={product.city}
            />
          </label>
          {errors.city && <span className="error"> {errors.city.message}</span>}

          <label>
            Descrição
            <input
              type="text"
              {...register("description")}
              placeholder={product.description}
            />
          </label>
          {errors.description && (
            <span className="error"> {errors.description.message}</span>
          )}

          <label>
            Preço
            <input
              type="text"
              {...register("price")}
              placeholder={product.price}
            />
          </label>
          {errors.price && (
            <span className="error"> {errors.price.message}</span>
          )}

          <label>
            Foto
            <input
              type="text"
              {...register("image")}
              placeholder={product.image}
            />
          </label>
          {errors.image && (
            <span className="error"> {errors.image.message}</span>
          )}

          <label>
            Categoria
            <select
              {...register("category")}
              defaultValue={product.category}
              name="categoria"
            >
              <option value="Esportes">Esportes</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Veículos">Veículos</option>
              <option value="Hobbies">Hobbies</option>
              <option value="Vestuário">Vestuário</option>
              <option value="Eletrônicos e celulares">
                Eletrônicos e celulares
              </option>
            </select>
          </label>
          {errors.category && (
            <span className="error"> {errors.category.message}</span>
          )}
          <div className="btnContainer">
            <StyledBtnCadastro type="submit">Editar</StyledBtnCadastro>

            <Button
              handlerClick={handleSair}
              blue={"blue"}
              title={"Sair"}
            ></Button>
          </div>
        </StyledForm>
      </Modal>
    </BackGroundModal>
  );
};
