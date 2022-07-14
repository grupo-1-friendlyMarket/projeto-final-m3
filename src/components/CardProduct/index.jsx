import { useContext } from "react";
import { ChatContext } from "../../contexts/chat";
import Button from "../Button";
import { Container } from "./styles";

const Card = ({ index, item }) => {
  const { setShowElement } = useContext(ChatContext);

  return (
    <Container>
      <div key={index} className="item">
        <img src={item.image} alt={item.description} />
        <span>{item.category}</span>
        <h3>{item.productName}</h3>
        <p>{item.description}</p>
        <h2>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
        <Button width={120} handlerClick={() => setShowElement(true)} title="Quero esse!"></Button>
      </div>
    </Container>
  );
};

export default Card;
