import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 300px;
  padding: 20px 0px;
  border-radius: 4px;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
  background-color: white;

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: #00000096;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 70%;
    font-size: 14px;
    gap: 5px;
  }

  .error {
    color: var(--red-error);
    font-size: 12px;
    width: 300px;
    text-align: center;
  }

  button {
    margin-top: 10px;
    font-size: 12px;
  }

  input::placeholder {
    font-size: 13px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (min-width: 500px) {
    height: 450px;
    overflow: auto;
    width: 450px;

    button {
      width: 320px;
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8f8f8f;
      border-radius: 1.25rem;
    }
  }
`;

export const StyledInput = styled.input`
  border: 2px solid #b5b5b5;
  border-radius: 4px;
  padding: 8px;

  :focus {
    transition: 0.2s;
    border-color: var(--dark-blue);
  }
`;
