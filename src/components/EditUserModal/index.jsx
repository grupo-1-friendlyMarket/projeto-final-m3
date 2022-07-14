import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CloseButton, EditForm, ModalContainer, ModalHeader } from "./style";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import Button from "../Button";

export const EditUserModal = ({ user, setModal }) => {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
    email: yup
      .string()
      .email("Formato de email inválido")
      .required("Campo obrigatório"),
    cellphone: yup
      .string()
      .matches(
        /^([1-9]{2}) (9)[0-9]{4}-[0-9]{4}$/,
        "Formato inválido. Ex: 11 90000-0000"
      )
      .required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    user_image: yup
      .string()
      .matches(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
        { message: "Link inválido", excludeEmptyString: true }
      ),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
        "Senha deve conter no mínimo 8 caracteres com pelo menos 1 letra maíuscula, 1 número e 1 caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const editUserInfo = (data) => {
    const id = JSON.parse(localStorage.getItem("@Market:id"));
    const token = JSON.parse(localStorage.getItem("@Market:token"));

    const { fullname, email, cpf, cellphone, city, user_image, password } =
      data;

    const newInfo = {
      fullname,
      email,
      cpf,
      cellphone,
      city,
      user_image,
      password,
    };

    api
      .patch(`/users/${id}`, newInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Informações atualizadas com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha na atualização");
      });
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <h3>Atualizar informações</h3>
        <CloseButton onClick={() => setModal(false)}>X</CloseButton>
      </ModalHeader>
      <EditForm onSubmit={handleSubmit(editUserInfo)}>
        <label>
          Nome
          <input
            type="text"
            defaultValue={user.fullname}
            {...register("fullname")}
            placeholder="Digite aqui seu nome"
          />
        </label>
        {errors.fullname && (
          <span className="error"> {errors.fullname.message}</span>
        )}

        <label>
          Email
          <input
            type="text"
            defaultValue={user.email}
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
        </label>
        {errors.email && <span className="error"> {errors.email.message}</span>}

        <label>
          CPF
          <input
            readOnly
            disabled
            type="number"
            defaultValue={user.cpf}
            {...register("cpf")}
          />
        </label>
        {errors.cpf && <span className="error"> {errors.cpf.message}</span>}

        <label>
          Telefone
          <input
            defaultValue={user.cellphone}
            {...register("cellphone")}
            placeholder="Digite aqui seu telefone"
          />
        </label>
        {errors.cellphone && (
          <span className="error"> {errors.cellphone.message}</span>
        )}
        <label>
          Cidade
          <input
            type="text"
            defaultValue={user.city}
            {...register("city")}
            placeholder="Digite aqui a cidade"
          />
        </label>
        {errors.city && <span className="error"> {errors.city.message}</span>}

        <label>
          Foto
          <input
            type="text"
            defaultValue={user.user_image}
            {...register("user_image")}
            placeholder="Insira o link da foto"
          />
        </label>
        {errors.user_image && (
          <span className="error"> {errors.user_image.message}</span>
        )}

        <label>
          Nova senha
          <input
            type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
        </label>
        {errors.password && (
          <span className="error"> {errors.password.message}</span>
        )}

        <label>
          Confirmar senha
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Digite novamente sua senha"
          />
        </label>
        {errors.confirmPassword && (
          <span className="error"> {errors.confirmPassword.message}</span>
        )}

        <Button type="submit">Atualizar informações</Button>
      </EditForm>
    </ModalContainer>
  );
};
