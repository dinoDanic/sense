import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    

`;

export default GlobalStyle;
