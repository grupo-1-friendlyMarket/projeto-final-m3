import styled from "styled-components";

export const BackGroundModal = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  background-color: rgba(88, 88, 88, 0.25);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: 315px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`;
