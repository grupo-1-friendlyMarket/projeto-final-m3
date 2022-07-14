import styled from "styled-components";
// import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 50vw;
  /* padding-left: 20px; */

  .titleName {
    max-width: 300px;
    margin: 7rem 0 1rem 7rem;
    line-height: 1.2;
    font-size: 28px;
  }

  .subtitleName {
    max-width: 19rem;
    margin-left: 7rem;
    font-size: 16px;
    line-height: 1.6;
  }

  img {
    /* margin-top: 1rem; */
    width: 30rem;
    margin: 2rem 0 0 9rem;
  }

  @media screen and (min-width: 319px) and (max-width: 375px) {
    .titleName {
      margin: 7rem 0 2rem 2rem;
      width: 15rem;
      font-size: 22px;
    }

    .subtitleName {
      margin: 0 0 0 2rem;
      width: 13rem;
    }

    img {
      margin: 0rem 0 0 10rem;
      width: 9rem;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 625px) {
    .titleName {
      margin: 7rem 0 2rem 2rem;
      width: 15rem;
      font-size: 22px;
    }

    .subtitleName {
      margin: 0 0 0 2rem;
      width: 13rem;
    }

    img {
      margin: 0rem 0 0 10rem;
      width: 9rem;
    }
    
  }

  @media screen and (min-width: 626px) and (max-width: 1041px) {
    .titleName {
      margin: 7rem 0 2rem 2rem;
      width: 15rem;
      font-size: 22px;
    }

    .subtitleName {
      margin: 0 0 0 2rem;
      width: 13rem;
    }

    img {
      margin: -4rem 0 0 18rem;
      width: 22rem;
    }
  }

  @media screen and (min-width: 1042px) and (max-width: 1250px) {
    img {
      margin: 1rem 0 0 10rem;
      width: 22rem;
    }
  }
`;

// const animation = keyframes`
//   from {
//     position: absolute;
//     left: -650px;
//     transform: scale(0.8) rotate(60deg);
//   }

//   to {
//     position: absolute;
//     left: 8px;
//     transform: scale(1) rotate(0deg);
//   }

// `;

// export const Animation = styled.div`
//   animation: ${animation} 2s;
// `;
