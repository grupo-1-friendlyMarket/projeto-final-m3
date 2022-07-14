import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  background-image: (aboutUs);
  background-repeat: no-repeat;
  background-size: 100vw;
  margin-bottom: 50px;

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 92vh;
    margin-top: 10vh;
  }

  .tabs {
    display: flex;
    justify-content: center;
    background-color: white;

    .tab {
      width: 150px;
    }

    .css-1aquho2-MuiTabs-indicator {
      border: 2px solid var(--light-blue);
    }
    .Mui-selected {
      color: var(--light-blue);
      font-weight: 700;
      border: 2px solid var(--light-blue);
    }

    @media (min-width: 500px) {
      .tab {
        width: 225px;
      }
    }
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;
