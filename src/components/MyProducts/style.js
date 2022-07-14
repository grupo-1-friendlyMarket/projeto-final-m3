import styled from "styled-components";

export const ContainerMyProducts = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.42);
  padding: 15px;
  margin-bottom: 50px;
  .userProductsHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      color: grey;
    };
  };
  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    ul {
      display: flex;
      scrollbar-width: none;
      list-style: none;
      overflow-x: scroll;
      width: 100%;
      height: 65vh;
      gap: 20px;
      ::-webkit-scrollbar {
        width: 0.5rem;
     };
      ::-webkit-scrollbar-thumb {
          background-color: #8f8f8f;
          border-radius: 1.25rem;
      };
      
    };
    @media (min-width: 760px) {
      .bemVindo {
        font-size: 80px;
        color: red;
        background-color: grey;
      };
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        overflow-x: hidden;
        gap: 20px;
        height: 100%;
      };
    };
  };
  .btnRegisterProduct{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    };
  @media (min-width: 550px) {
    width: 75%;
  };
`;

export const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: #555555;
  @media (min-width: 550px) {
    font-size: 35px;
    font-weight: 400;
  };
`;