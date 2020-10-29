import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
    html {
        font-family: 'Roboto';
    }

    body{
        margin: 0;
        height: 100vh;
    }

    label {
        margin-top: .5rem;
    }

    .table th, .table td {
        padding: 0;
        padding-left: 0.75rem;
        vertical-align: inherit;
    }

    td svg{
        cursor: pointer;
    }

    .is-active {
        background-color: #ccc;
    }
`;

export default GlobalStyle;
