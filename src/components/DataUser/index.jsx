import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Button from "../Button";
import { EditUserModal } from "../EditUserModal";
import {
  ContainerUserInfo,
  InfoDiv,
  StyledH3,
  StyledP,
  StyledInfoP,
  StyledSection,
} from "./style";

const DataUser = () => {
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@Market:id"));

    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Paper sx={{ padding: 5 }}>
      <StyledSection>
        <StyledH3>Bem vinde, {user.fullname}!</StyledH3>
        <StyledP>Gerenciar e proteger sua conta</StyledP>
        <img src={user.user_image} alt={user.fullname} />
        <ContainerUserInfo>
          <InfoDiv>
            <StyledInfoP>Nome</StyledInfoP>
            <StyledInfoP>{user.fullname}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Email</StyledInfoP>
            <StyledInfoP>{user.email}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>CPF</StyledInfoP>
            <StyledInfoP>{user.cpf}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Celular</StyledInfoP>
            <StyledInfoP>{user.cellphone}</StyledInfoP>
          </InfoDiv>
          <InfoDiv>
            <StyledInfoP>Cidade</StyledInfoP>
            <StyledInfoP>{user.city}</StyledInfoP>
          </InfoDiv>
        </ContainerUserInfo>

        <Button
          handlerClick={() => setModal(true)}
          width={250}
          blue={"blue"}
          title={"EDITAR"}
        ></Button>
        {modal && <EditUserModal user={user} setModal={setModal} />}
      </StyledSection>
    </Paper>
  );
};

export default DataUser;
