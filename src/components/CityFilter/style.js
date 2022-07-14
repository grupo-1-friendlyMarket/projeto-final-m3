import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #83d0c8;
  color: #fff;
  height: 100%;
  width: 50vw;
  padding: 20px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  h4 {
    color: #fff;
  }

  .css-i4bv87-MuiSvgIcon-root {
    padding-top: 5px;
    margin-right: 10px;
  }

  @media screen and (min-width: 319px) and (max-width: 1041px) {
    width: 100vw;
  }
`;
