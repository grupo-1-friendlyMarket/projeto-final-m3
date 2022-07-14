import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterForm, StyledInput } from "./style";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Button from "../Button";

const Register = () => {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
    email: yup
      .string()
      .email("Formato de email inválido")
      .required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
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
        "Deve conter no mínimo 8 caracteres com pelo menos 1 letra maíuscula, 1 número e 1 caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não correspondem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerUser = (data) => {
    const { fullname, email, cpf, cellphone, city, user_image, password } =
      data;

    const newUser = {
      fullname,
      email,
      cpf,
      cellphone,
      city,
      user_image,
      password,
    };

    api
      .post("/signup", newUser)
      .then(() => {
        toast.success("Conta cadastrada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(registerUser)}>
        <h3>Cadastre-se</h3>

        <label>
          Nome
          <StyledInput
            type="text"
            {...register("fullname")}
            placeholder="Digite aqui seu nome"
          />
        </label>
        {errors.fullname && (
          <span className="error"> {errors.fullname.message}</span>
        )}

        <label>
          Email
          <StyledInput
            type="text"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
        </label>
        {errors.email && <span className="error"> {errors.email.message}</span>}

        <label>
          CPF
          <StyledInput
            type="number"
            {...register("cpf")}
            placeholder="Digite aqui seu CPF"
          />
        </label>
        {errors.cpf && <span className="error"> {errors.cpf.message}</span>}

        <label>
          Telefone
          <StyledInput
            {...register("cellphone")}
            placeholder="Digite aqui seu telefone"
          />
        </label>
        {errors.cellphone && (
          <span className="error"> {errors.cellphone.message}</span>
        )}
        <label>
          Cidade
          <StyledInput
            type="text"
            {...register("city")}
            placeholder="Digite aqui a cidade"
          />
        </label>
        {errors.city && <span className="error"> {errors.city.message}</span>}

        <label>
          Foto
          <StyledInput
            type="text"
            {...register("user_image")}
            placeholder="Insira o link da foto"
          />
        </label>
        {errors.user_image && (
          <span className="error"> {errors.user_image.message}</span>
        )}

        <label>
          Senha
          <StyledInput
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
          <StyledInput
            type="password"
            {...register("confirmPassword")}
            placeholder="Digite novamente sua senha"
          />
        </label>
        {errors.confirmPassword && (
          <span className="error"> {errors.confirmPassword.message}</span>
        )}

        <Button title="CADASTRAR" type="submit" width="210" quadrado="quadrado">
          
        </Button>
      </RegisterForm>
    </>
  );
};

export default Register;
