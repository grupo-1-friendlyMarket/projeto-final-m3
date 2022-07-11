import styled from "styled-components";
import { keyframes } from "styled-components";


export const Container = styled.div`
    height: 92vh;
    width: 50vw;

    h2{
        max-width: 300px;
        margin-left: 50px;
        margin-top: 50px;
    }

    p{
        max-width: 250px;
        margin-left: 50px;
    }

    img{
        margin-top: 40px;
        /* width: 50vw;
        height: 60vh; */
        /*comentei aqui pq a imagem fica com uma qualidade péssima
        quando seta uma largura e altura */
    }

`

const animation = keyframes`
  from {
    position: absolute;
    left: -560px;
    transform: scale(0.8) rotate(60deg);
  }

  to {
    position: absolute;
    left: 0px;
    transform: scale(1) rotate(0deg);
  }

`

export const Animation = styled.div`
    animation: ${animation} 2s ;
`

