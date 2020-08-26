import { createGlobalStyle } from "styled-components";
import background from "./background-picture.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-weight: bold;
        font-family: 'Merienda', sans-serif;
    }
    *, ::before, ::after {
        box-sizing: inherit;
    }
    body {
        background-image: url(${background});
        background-size: cover;
        min-height: 100vh;
        padding-bottom: 50px;
        position: relative;
    }
`;