import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { LoginForm } from "./style";

const Login = () => {
  const { register, handleSubmit } = useForm();

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
        <h3>Seja bem-vindo!</h3>
        <p>Preencha os dados do login para acessar</p>
        <label>
          Email
          <input type="email" {...register("email")} />
        </label>

        <label>
          Senha
          <input type="password" {...register("password")} />
        </label>

        <button>Entrar</button>
      </LoginForm>
    </>
  );
};

export default Login;
