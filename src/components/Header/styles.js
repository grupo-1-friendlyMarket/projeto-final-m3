import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Container = styled.nav`
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid black;
   
    div{
        button{
        margin: 20px;
        }
    }   
    
    .avatar{
        background: none;
        border: none;

        :hover{
            transform: scale(1.2);
        }
    }


`
