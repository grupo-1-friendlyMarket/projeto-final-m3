import { Container, PageContainer } from "./styles"
import { Avatar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { useState } from "react"
import { useHistory } from "react-router-dom"


export const Header = () => {

    const history = useHistory('')

    //localStorage.setItem()
    const token = localStorage.getItem('@token')

    return (
        <PageContainer>
        <Container>
            <h1>Friendly Market</h1>
            <div className="buttons">
                <button onClick={() => history.push('/dashboard')}>Produtos</button>
                <button>Eventos</button>
                <button onClick={() => history.push('/aboutUs')} >Sobre</button>
            </div>
            <div>
                {token? (<button><Avatar alt="" src="" /><FormatAlignJustifyIcon/></button>) : 
                    (<button onClick={() => history.push('/register')}>Entrar</button>)
                }
                
            </div>
        </Container>

        </PageContainer>
    )
}