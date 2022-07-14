import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 30px;


    div{
        display: flex;
        flex-direction: row;

        .SearchButton{
            background: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100px;
            border: none;
            margin: 10px;
            
        };

        > button{
            padding: 0px 15px;
        };

        .searchImg{
            width: 90px;
            height: 82px;
            border-radius: 100%;
            background-color: lightgray;
            border: none;   
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;

            :hover {
                background-color: grey;
      }
        };
        
        
    };

    .buttons{
       min-height: 170px;
       max-height: 170px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       overflow: auto;
       overflow-y: hidden;
       margin-top: 20px;
       display: -webkit-box;
       

       > button{
        width: 100%;
        height: 150px;

       };

       @media (max-width: 859px) {
            width: 65vw;
       };
    };
   
`;

export const SearchInput = styled.div`
        width: 45vw;
        height: 20vh;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;

        input{
            border: none;
            width: 90%;
            margin-left: 5px;
            height: 3rem;
            font-size: 16px;
        };

        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        };

        > button{
            margin-right: 10px;
        };

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            width: 40px;
            margin: 0px;
            height: 5vh;

        };

        svg{
            color: grey;
        };

        @media (max-width: 1020px) {
            width: 80vw;
            display:-webkit-box;

            input {
                font-size: 14px;
            };

        };

`;