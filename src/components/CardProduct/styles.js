import styled from "styled-components";

export const Container = styled.div`
    width: 21%;
    min-width: 240px;
    min-height: 350px;
    border: 2.5px solid var(--light-blue);
    max-height: 222px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    :hover {
        border: 2.5px solid var(--dark-blue);
      };

    div {
        margin: 0 10px 0 10px;

        .divImg {
            width: 100%;
            max-height: 150px;
            margin: 0px;
            min-width: 120px;
            min-height: 150px;
        };

        img {
            max-height: 150px;
            width: 100%;
        };

        span {
            color: var(--grey-1);
            font-size: 14px;
        };

        p {
            font-size: 14px;
            height: 22px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        };

        h2 {
            font-weight: 300;
        };

        button {
            padding: 0px 15px;
            color: var(--black);
            margin-left: 48%;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            font-family: "Poppins";
            height: 30px;
        };
    };

    @media (max-width: 1024px) {
          min-width: 250px;
          min-height: 300px;
    };
`;