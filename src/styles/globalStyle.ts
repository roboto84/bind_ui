import { createGlobalStyle } from 'styled-components';

const styleFont: string = '\'Roboto\', Open Sans, Helvetica, Verdana, sans-serif';

export const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: ${styleFont};
    font-size: 30px;
    margin: 15px 20px 0 38px;
  }

  h2 {
    font-family: ${styleFont};
    font-size: 22px;
    margin: 10px;
  }

  h3 {
    font-family: ${styleFont};
    font-size: 16px;
    margin: 5px;
  }

  a:link {
    color: blue;
  }

  a:visited {
    color: purple;
  }

  a:hover {
    color: green;
  }

  a:active {
    color: red;
  }
`;
