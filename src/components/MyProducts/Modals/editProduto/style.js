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
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  .btnContainer {
    display: flex;
    gap: 10px;
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
  background-color: #83D0C8;
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
