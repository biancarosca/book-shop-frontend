import styled, { createGlobalStyle } from 'styled-components';

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

export const StyScrollBar = styled.div`
    scrollbar-color: #18D47C #2B2D30;
    scrollbar-width: thin;
    /* -webkit-overflow-scrolling: auto !important; */
    ::-webkit-scrollbar {
        width: 10px;
        z-index: 1;
    }

    ::-webkit-scrollbar-track {
        background: #2B2D30;
        z-index :1;
        }
    ::-webkit-scrollbar-thumb {
        background: #18D47C; 
        z-index:1;

    }
    ::-webkit-scrollbar-thumb:hover {
        background:#16b769; 
    }
`

export const StyGlobalHeader = styled.div`
     background-color: #EEF1F9;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;


    @media (max-height:750px){
        height: 15vh;
    }

    @media (max-height:500px){
        height: 18vh;
    }
    h1{
        font-size: 1rem;
        color: #756e6e;
        margin: 2rem;
        @media (max-width:700px){
            margin-bottom: 0;
        }
        @media (max-height:500px){
        font-size: 0.8rem;
        }
    }
`
export const StyBtn = styled.button`
text-decoration: none;
font-family: 'Poppins',sans-serif;
font-size: 1rem;
background-color: white;
padding: 0 2rem;
border-radius: 1rem;
border: 1px solid #18D47C;
margin-top: 2rem;

`

export default GlobalStyles;