import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

const GlobalStyle = createGlobalStyle`  
    html {
        font-family: 'Roboto';
    }

    body{
        margin: 0;
        height: 100vh;
    }

    .is-active {
        background-color: #ccc;
    }
`;

export default GlobalStyle;
