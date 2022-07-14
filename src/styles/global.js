import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    };

    :root {

        --dark-blue: #173653; 
        --dark-blue-hover: #173653bf;
        --shadow-blue: #0078F0;
        --light-blue: #83D0C8; 

        --light-orange: #FFE3C3;

        --green-succes: #06826B;
        --red-error: #CD3232;

        --white: #FFFFFF;
        --black: #000000;
        --grey-1: #00000066;

    };

    body {
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 700;
    };

    button {
        cursor: pointer;
    };

    a {
        text-decoration: none;
    };
`;
export default GlobalStyle;
