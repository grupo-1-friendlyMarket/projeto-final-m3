import { StyledButton } from "./styled";

export default function Button({
  handlerClick,
  blue,
  width,
  height,
  quadrado,
  title,
  children,
}) {
  return (
    <>
      <StyledButton
        quadrado={quadrado}
        width={width}
        height={height}
        blue={blue}
        onClick={handlerClick}
      >
        {children}
        {title}
      </StyledButton>
    </>
  );
}
