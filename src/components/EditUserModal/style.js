import styled from "styled-components";

export const ModalContainer = styled.section`
  position: fixed;

  width: 100%;
  min-height: 100vh;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
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
  height: 50%;
  background-color: white;
  overflow-y: auto;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 2rem;
    padding-left: 20px;
    border: 2px solid var(--grey-1);
    border-radius: 7px;

    :focus {
      outline: 0;
    }
  }
  .error {
    color: crimson;
  }
`;
