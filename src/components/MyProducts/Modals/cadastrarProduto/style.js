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
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
  width: 315px;
  height: 35rem;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8f8f8f;
    border-radius: 1.25rem;
  }

  .btnContainer {
    display: flex;
    gap: 10px;

    > button {
      margin-top: 10px;
      margin-bottom: 50px;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 70vh;

  select {
    overflow: scroll;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .error {
    color: crimson;
  }

  input,
  select {
    height: 2rem;
    padding-left: 20px;
    border: 2px solid var(--grey-1);
    border-radius: 7px;

    :focus {
      outline: 0;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const StyledBtnCadastro = styled.button`
  background-color: #83d0c8;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  color: white;
  padding: 8px;
  cursor: pointer;

  :hover {
    border: 2px solid #4797de;
  }

  :active {
    background-color: #5c8d88;
  }
`;
