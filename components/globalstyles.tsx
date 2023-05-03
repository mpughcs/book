import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    background-color:#0f1929;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    /* font-family: 'system-ui', sans-serif; */

  a {
    color: inherit;
    text-decoration: underline;

  }
  a:hover{
    color: white;
  }

  * {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6,p,a{
    color: wheat;
  }
`
  
export default GlobalStyle
