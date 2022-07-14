import styled from "styled-components";


export const Container = styled.div`

  position: fixed;

  width: 100%;
  min-height: 100vh;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0,0,0, .5);

  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container textarea {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
    resize: none;
    min-height: 200px;
  }

  .form-container textarea:focus {
    background-color: #ddd;
    outline: none;
  }

  button {
    margin: 5px 50px;
  }
`;
