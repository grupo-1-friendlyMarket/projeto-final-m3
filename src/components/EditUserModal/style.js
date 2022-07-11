import styled from "styled-components";

export const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  height: 50px;
  padding: 18px;
  border-radius: 4px 4px 0px 0px;
  background-color: white;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  width: 370px;
  background-color: white;

  label {
    display: flex;
    flex-direction: column;
  }
  .error {
    color: crimson;
  }
`;
