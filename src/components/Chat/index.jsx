import { useContext } from "react";
import { toast } from "react-toastify";
import { ChatContext } from "../../contexts/chat";
import Button from "../Button";
import { Container } from "./styles";

const Chat = () => {
  const { showElement, setShowElement } = useContext(ChatContext);

  return showElement ? (
    <Container>
      <div className="chat-popup" id="myForm">
        <form className="form-container">
          <h1>Chat</h1>

          <textarea placeholder="Envie uma mensagem para o vendedor.."></textarea>

          <Button
            quadrado={true}
            width={150}
            blue={true}
            title={"Enviar"}
            handlerClick={() => toast.success("Mensagem enviada com sucesso!")}
          ></Button>
          <Button
            quadrado={true}
            width={150}
            blue={false}
            title={"Fechar"}
            handlerClick={() => setShowElement(false)}
          ></Button>
        </form>
      </div>
    </Container>
  ) : null;
};

export default Chat;
