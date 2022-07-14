import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  
  
  .cardContainer {
      width: 80vw;
      gap: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      box-sizing: border-box;
      margin-bottom: 50px;

  }

  @media (max-width: 1020px) {
    .cardContainer {
      margin-top: 80px;
      display: -webkit-box;
      flex-wrap: nowrap;
      overflow: auto;
      overflow-y: hidden;
    }
  }
`;
