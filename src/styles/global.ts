import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: ${theme.color.background};
        -webkit-font-smoothing: antialiased;
      }
    `}
   
`;
