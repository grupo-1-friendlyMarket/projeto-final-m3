import { Container, PageContainer } from "./styles"
import { Avatar } from '@mui/material'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from '../Button'
import { api } from "../../services/api"


export const Header = () => {
    const history = useHistory("");

    const token = localStorage.getItem("@Market:token")
    const id = localStorage.getItem("@Market:id")

    const dataUser = () => {
        api
        .get(`users/${id}`)
        .then((res) => {
            const { user_image } = res
            localStorage.setItem("@Market:img", JSON.stringify(user_image))
        })
    }
    
    if(id){
        dataUser()
    }
    
    const userImg = localStorage.getItem("@Market:img")

    return (
      <PageContainer>
        <Container>
          <h1>Friendly Market</h1>
          <div className="buttons">
            <button onClick={() => history.push("/dashboard")}>Produtos</button>
            <button>Eventos</button>
            <button onClick={() => history.push("/aboutUs")}>Sobre</button>
          </div>
          <div>
            {token ? (
              <button>
                <Avatar alt="" src="" />
              </button>
            ) : (
              <button onClick={() => history.push("/login")}>Entrar</button>
            )}
          </div>
        </Container>
      </PageContainer>
    );
};
