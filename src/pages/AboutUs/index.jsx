import { Container } from "./style";
import { Header } from "../../components/Header";
import aboutUs from "../../assets/aboutUs.png";
import Daniely from "../../assets/Daniely.jpg";
import Angelica from "../../assets/Angelica.jpg";
import Luiz from "../../assets/Luiz.jpg";
import Sarah from "../../assets/Sarah.jpg";
import Nathalia from "../../assets/Nathalia.jpg";
import Jeffersson from "../../assets/Jeffersson.jpg";

export const AboutUs = () => {
  return (
    <Container>
      <Header />
      <section className="aboutusContainer">
        <div className="left">
          <span>Nossa visão</span>
          <h1>
            Somos uma empresa de venda e compras de produtos online, garantimos
            o transporte seguro de cada mercadoria.
          </h1>
          <img
            src={aboutUs}
            alt="Imagem para aba Sobre"
            className="imgAbout"
          ></img>
        </div>
        <div className="right">
          <p>
            Milhares de pessoas diariamente estão adquirindo novos produtos e
            vendendo os que não usam mais.
          </p>

          <p>
            Ao utilizarem uma plataforma na internet para tais fins, precisam
            descobrir se não irá cair num golpe ou até mesmo se o anuncio é uma
            fraude, e além de tais preocupações ainda precisam se precavir com o
            quão longe moram do suposto vendedor.
          </p>

          <p>
            Locomover-se grandes distâncias ou passar pela enorme burocracia de
            levar ao correio hoje em dia ja não é mais um opção viável.
          </p>

          <p>
            Nossa missão é oferecer a melhor experiência de compras e vendas
            online com segurança para o usuário, e total tranquilidade na hora
            do envio ou recebimento do produto.
          </p>
        </div>
      </section>
      <section className="apresentation">
        <span className="quemSomos">Quem somos</span>
        <div className="cardContainer">
          <div className="card">
            <picture>
              <img src={Angelica} alt="Foto da Angélica"></img>
            </picture>
            <div className="textContainer">
              <h3>Angélica</h3>
              <p>
                Meu nome é Angélica, tenho 26 anos. Trabalho desde muito jovem,
                isso me trouxe aprendizados valiosos que me ajudam a ser uma
                pessoa e profissional melhor a cada dia. Atualmente estou na
                área desenvolvimento web front-end, mas a tecnologia em geral me
                fascina. No meu tempo livre, gosto de conhecer novos lugares,
                cozinhar novos pratos e desenvolver novas habilidades.
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="card">
            <picture>
              <img src={Daniely} alt="Foto da Daniely"></img>
            </picture>
            <div className="textContainer">
              <h3>Daniely</h3>
              <p>
                Olá, me chamo Daniely. Tenho 21 anos, comecei na área de
                desenvolvimento web front-end há pouco mais de 6 meses e estou
                gostando muito da profissão. Eu gosto de descobrir como as
                coisas funcionam, aprender coisas novas e aprofundar meus
                conhecimentos nas que já sei fazer. No meu tempo livre eu gosto
                de assistir séries e filmes, ler e jogar.
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="card">
            <picture>
              <img src={Nathalia} alt="Foto da Nathalia"></img>
            </picture>
            <div className="textContainer">
              <h3>Nathalia</h3>
              <p>
                Sou a Nathalia, tenho 20 anos, comecei na área de
                Desenvolvimento Front-End em 2021 quando fiz um mini-curso de
                Javascript e me apaixonei pela linguagem. Eu gosto muito de
                trabalhar com lógica e criar aplicações utilizando diferentes
                ferramentas de tecnologia. Moro em São Paulo e no meu tempo
                livre gosto de assistir lives na Twitch e jogar Fall Guys.
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="card">
            <picture>
              <img src={Sarah} alt="Foto da Sarah"></img>
            </picture>
            <div className="textContainer">
              <h3>Sarah</h3>
              <p>
                Olá, me chamo Sarah e tenho 25 anos. Sou fascinada pela area
                tech desde que me conheço por gente. Faço bacharel de Ciência da
                Computação e amo tudo que envolve layout e estilos, por isso
                além do Front-End também estudo UI e UX design. No meu tempo
                livre gosto de assistir séries, ler livros (preferencialmente a
                saga Harry Potter) e jogar algo online.
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="card">
            <picture>
              <img src={Luiz} alt="Foto do Luiz"></img>
            </picture>
            <div className="textContainer">
              <h3>Luiz</h3>
              <p>
                Sou um desenvolvedor Frontend apaixonado por criar soluções
                através de programas responsivos e eficientes. Desde muito jovem
                tenho um grande interesse por tecnologia em geral. Estou sempre
                buscando habilidades novas para aprender e sempre procurando me
                aperfeiçoar no que ja sei. Trabalhei em diversas áreas
                diferentes porém foi na programação que eu encontrei meu lugar.
              </p>
            </div>
          </div>

          <hr></hr>

          <div className="card">
            <picture>
              <img src={Jeffersson} alt="Foto do Jefferson"></img>
            </picture>
            <div className="textContainer">
              <h3>Jefferson</h3>
              <p>
                Me chamo Jefferson, tenho 28 anos. Sempre gostei de desafios e
                como desenvolvedor encontrei muitos desafios, e não me refiro
                apenas a parte de codar algo que produza soluções, mas também a
                parte de entender a lógica dos seus colegas, equipe, outros
                devs. No meu tempo livre pratico esporte radicais e jogo Tibia.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
