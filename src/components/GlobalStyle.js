import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    body {
        font-family: 'SEBANG_Gothic_Bold', "Arial", sans-serif;
        padding-top: 1em;
        white-space: pre-wrap;
    }
    ul, ol {
        list-style: none;
        padding-left: 0px;
    }
`;

export default GlobalStyle;
