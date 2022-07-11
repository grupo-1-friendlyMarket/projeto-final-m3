import { StyledButton } from "./styled";

export default function Button({ handlerClick, blue, width, quadrado, title }) {
  return (
    <>
      <StyledButton
        quadrado={quadrado}
        width={width}
        blue={blue}
        onClick={handlerClick}
      >
        {title}
      </StyledButton>
    </>
  );
}
