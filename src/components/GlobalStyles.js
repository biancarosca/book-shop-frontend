import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins',sans-serif;
        overflow: hidden;
    }
`


export default GlobalStyles;