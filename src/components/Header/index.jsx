import { Container } from "./styles";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import { api } from "../../services/api";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const Header = () => {
  const history = useHistory("");

  const token = localStorage.getItem("@Market:token");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@Market:id"));

    api
      .get(`/users/${id}`)
      .then((res) => {
        localStorage.setItem(
          "@Market:img",
          JSON.stringify(res.data.user_image)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const userImg = JSON.parse(localStorage.getItem("@Market:img"));

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
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
          <div className="buttons-user">
            <button className="avatar">
              <Avatar
                alt="foto de perfil"
                sx={{ bgcolor: "#83D0C8" }}
                src={userImg}
                onClick={() => history.push("/login")}
              />
            </button>
            <button className="logout" onClick={logOut}>
              <LogoutOutlinedIcon></LogoutOutlinedIcon>
            </button>
          </div>
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
