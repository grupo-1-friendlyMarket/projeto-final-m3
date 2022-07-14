import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { LoginForm } from "./style";
import { TextField } from "@mui/material";
import { StyledButton } from "../Button/styled";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const identifyLogin = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;

        localStorage.setItem("@Market:token", JSON.stringify(accessToken));
        localStorage.setItem("@Market:id", JSON.stringify(user.id));
      })
      .catch(() => {
        toast.error("Usuário não encontrado ou senha incorreta");
      });
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit(identifyLogin)}>
        <h3>Seja bem-vinde!</h3>
        <p>Preencha os dados do login para acessar</p>
        <label>
          Email
          <TextField
            variant="standard"
            type="email"
            placeholder="Email cadastrado"
            {...register("email")}
          />
        </label>

        <label>
          Senha
          <TextField
            variant="standard"
            type="password"
            placeholder="Insira sua senha"
            {...register("password")}
          />
        </label>

        <StyledButton
          type="submit"
          width="250"
          quadrado="quadrado"
          onClick={() => history.push("/perfil")}
        >
          ENTRAR
        </StyledButton>
      </LoginForm>
    </>
  );
};

export default Login;
