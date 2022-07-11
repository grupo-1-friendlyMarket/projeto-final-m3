import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
}

:root{
}

h1, h2, h3, h4, h5, h6 {
        font-size: 1rem;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
export default GlobalStyle;
