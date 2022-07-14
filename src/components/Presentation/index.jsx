import {Container, Animation} from './style'
import presentation from '../../assets/presentation.png'

export const Presentation = () => {
return(
   
    <Container>
        <>
            <h1 className='titleName'>Compre diretamente dos seus vizinhos</h1>
            <p className='subtitleName'>Negocie com pessoas <br />da sua cidade com mais segurança e proximidade do vendedor</p>
            
            {/* <Animation> */}
                <img alt="Imagem de apresentação" src={presentation}></img>
            {/* </Animation> */}
        </>
    </Container>
    
)
} 