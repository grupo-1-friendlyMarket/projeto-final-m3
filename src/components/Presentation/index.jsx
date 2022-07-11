import {Container, Animation} from './style'
import presentation from '../../assets/presentation.png'

export const Presentation = ({start}) => {
return(
   
    <Container>
        <>
<<<<<<< HEAD
        {start === "left" ? (
        <>
        <h2>Compre diretamente dos seus vizinhos</h2>
        <p>Negocie com pessoas da sua cidade com mais segurança e proximidade do vendedor</p>
                
        <Animation start={start}>
             <img alt="Imagem de apresentação" src={presentation}></img>
         </Animation>
        </>
        ):(
            <>
            <h2>Bem vindo</h2>
            <Animation start={start}>
             <img alt="Imagem de apresentação" src={presentation}></img>
            </Animation>
            </>
            )
        } 
=======
            <h2>Compre diretamente dos seus vizinhos</h2>
            <p>Negocie com pessoas da sua cidade com mais segurança e proximidade do vendedor</p>
            
            <Animation>
                <img alt="Imagem de apresentação" src={presentation}></img>
            </Animation>
>>>>>>> 9c69813e804a31fbfafe641cb1993f41d05513f0
        </>
    </Container>
    
)
} 