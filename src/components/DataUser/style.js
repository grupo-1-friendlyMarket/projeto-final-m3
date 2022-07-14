import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
`;

export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledH3 = styled.p`
  font-size: 18px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  -webkit-text-fill-color: #696969;
  font-family: "Poppins", sans-serif;
`;

export const StyledP = styled.p`
  font-size: 12px;
  color: grey;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

export const StyledInfoP = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  img {
    width: 200px;
    height: 200px;

    border-radius: 100px;
  }
`;
