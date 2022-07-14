import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .aboutusContainer {
    display: flex;
    gap: 12rem;
  }

  .left {
    width: 35vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 7rem;

    span {
      color: grey;
      max-width: 16rem;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 5px;
    }
  }

    h1{
        font-size: 22px;
    }

    .imgAbout {
      width: 42rem;
    }
  }

  .right {
    width: 30vw;
    margin-top: 7rem;

    p {
      margin-top: 3rem;
      font-size: 18px;
    }
  }

  .apresentation {
    width: 75vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    span {
      color: grey;
      max-width: 16rem;
      font-size: 20px;
      line-height: 1.6;
      margin-top: 5rem;
    }
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 2rem;
  }

  .card {
    width: 36vw;
    display: flex;

      img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        margin-left: 15px;
      }
    }
  }

    hr {
      display: none;
    }

    .textContainer {
      width: 65%;
      margin-left: 18px;
      margin-top: 4px;

      h3 {
        font-size: 20px;
      }

      p{
        font-size: 15px;
        margin-top: 7px;
        line-height: 1.2;
      }
    }
  }

    @media screen and (min-width: 319px) and (max-width: 1300px){
      .aboutusContainer{
        flex-direction: column;
        width: 87vw;
        gap: 1rem;
      }

      .left{
        width: auto;
        text-align: center;
        /* margin-top: 2rem; */
      }

      .imgAbout{
        width: 22rem !important;   
      }

      .right{
        width: auto;
        margin: 0;
        font-weight: 200;
      }

      .cardContainer{
        flex-direction: column;
        margin: 0;
        width: auto;
      }

      .apresentation{
        width: 85vw;
        border: none;
      }

      .card{
        width: auto;
        height: auto;
        margin: 1rem 0;
      }
    }
`;
