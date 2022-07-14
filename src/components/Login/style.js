import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
  background-color: white;

  input::placeholder {
    font-size: 14px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: #00000096;
  }

  p {
    font-size: 12px;
    color: var(--grey-1);
    margin-bottom: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 5px;
    font-size: 12px;
    margin-bottom: 15px;
  }

  button {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (min-width: 500px) {
    height: 450px;
    width: 450px;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8f8f8f;
      border-radius: 1.25rem;
    }
  }
`;
