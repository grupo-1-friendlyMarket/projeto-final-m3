import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid black;

  .buttons {
    display: flex;
    gap: 20px;
  };

  .buttons-nav {
    display: flex;
    gap: 20px;
  };

  .avatar {
    background: none;
    border: none;

    :hover {
      transform: scale(1.2);
    };
  };

  .titleHome {
    font-size: 28px;
    cursor: pointer;
  };

  .dropdown {
    position: relative;
    display: none;

    #dropdown-input {
        display: none;
    };
  };

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    
    a {
      border: 1px solid black;
      padding: 10px;
      color: black;
      background-color: #b5b5b5;
      display: flex;
      gap: 10px;
    };
  };

  .dropdown #dropdown-input:checked ~ .dropdown-content {
    display: flex;
    flex-direction: column;
  };

  @media (max-width: 650px) {
    .dropdown {
      display: inline-block;
    };
    
    .buttons-nav {
      display: none;
    };

    .titleHome {
      font-size: 20px;
    };
  };
`;

