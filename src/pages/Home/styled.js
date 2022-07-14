import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  height: 100vh;
  align-items: flex-start;
  
  @media screen and (min-width: 319px) and (max-width: 1041px){
    flex-direction: column;
  };
`;