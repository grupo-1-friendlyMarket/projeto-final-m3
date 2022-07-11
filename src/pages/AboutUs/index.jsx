import { Container } from './style'
import { Header } from '../../components/Header'
import aboutUs from '../../assets/aboutUs.png'


export const AboutUs = () => {

    return (
        <Container>
            <Header />
            <section className='aboutusContainer'>
                <div className='left'>
                    <span>Nossa visão</span>
                    <h2>Somos uma empresa de venda e compras de produtos online, garantimos o transporte seguro de cada mercadoria.</h2>
                    <img src={aboutUs} alt="Imagem para aba Sobre"></img>
                </div>
                <div className='right'>
                    <p>Milhares de pessoas diariamente estão adquirindo novos produtos e vendendo os que não usam mais. </p>

                    <p>Ao utilizarem uma plataforma na internet para tais fins, precisam descobrir se não irá cair num golpe ou até mesmo se o anuncio é uma fraude, e além de tais preocupações ainda precisam se precavir com o quão longe moram do suposto vendedor.</p>
 
                    <p>Locomover-se grandes distâncias ou passar pela enorme burocracia de levar ao correio hoje em dia ja não é mais um opção viável.</p>

                    <p>Nossa missão é oferecer a melhor experiência  de compras e vendas online com segurança para o usuário, e total tranquilidade na hora do envio ou recebimento do produto.</p>
                    
                </div>
            </section>
            <section className='apresentation'>
                <span>quem somos</span>
                <div className='cardContainer'>
                    <div className='card'>
                        <picture>
                            <img alt='Foto da Angélica'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Angélica</h3>
                            <p></p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='card'>
                        <picture>
                            <img alt='Foto da Daniely'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Daniely</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className='card'>
                        <picture>
                            <img alt='Foto da Nathalia'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Nathalia</h3>
                            <p></p>
                        </div>
                    </div>
                    <hr></hr>
                    
                    <div className='card'>
                        <picture>
                            <img alt='Foto da Sarah'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Sarah</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className='card'>
                        <picture>
                            <img alt='Foto do Luiz'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Luiz</h3>
                            <p></p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='card'>
                        <picture>
                            <img alt='Foto do Jefferson'></img>
                        </picture>
                        <div className='textContainer'>
                            <h3>Jefferson</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos architecto consequuntur enim autem voluptas sint ut. Minima dolorem necessitatibus inventore iusto, numquam, consequuntur fugit mollitia perspiciatis in itaque praesentium.</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </Container>
    )
}