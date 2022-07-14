import { Container } from "./styles";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

export const Header = () => {
  const history = useHistory("");

  const token = localStorage.getItem("@Market:token");

  return (
    <Container>
      <h1 className="titleHome" onClick={() => history.push("/")}>
        Friendly Market
      </h1>
      <div className="dropdown">
        <input type="checkbox" id="dropdown-input" />
        <label htmlFor="dropdown-input">
          <MenuIcon sx={{ fontSize: 40 }} />
        </label>

        <div className="dropdown-content">
          <Link to="/dashboard">
            <StorefrontOutlinedIcon />
            Produtos
          </Link>

          <Link to="/aboutUs">
            <LocalLibraryOutlinedIcon />
            Sobre
          </Link>
        </div>
      </div>
      <div className="buttons">
        <div className="buttons-nav">
          <Button
            handlerClick={() => history.push("/dashboard")}
            title="Produtos"
          ></Button>
          <Button
            handlerClick={() => history.push("/aboutUs")}
            title="Sobre"
          ></Button>
        </div>

        {token ? (
          <button className="avatar">
            <Avatar alt="foto de perfil" sx={{ bgcolor: "#83D0C8" }} />
          </button>
        ) : (
          <Button
            handlerClick={() => history.push("/login")}
            title="Entrar"
            blue
          ></Button>
        )}
      </div>
    </Container>
  );
};
