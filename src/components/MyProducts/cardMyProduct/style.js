import styled from "styled-components";

export const ContainerCard = styled.div`
  min-width: 300px;
  height: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  .cardImg {
    width: 100%;
    min-height: 210px;
  }

  .containerInfo {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }

  .containerBtns {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  @media (min-width: 500px) {
    width: 300px;
  }
`;
