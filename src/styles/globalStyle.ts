import { createGlobalStyle } from 'styled-components';

const styleFont: string = '\'Roboto\', Open Sans, Helvetica, Verdana, sans-serif';

export const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: ${styleFont};
    font-size: 28px;
    margin: 15px 20px 0 15px;
  }

  h2 {
    font-family: ${styleFont};
    font-size: 20px;
    margin: 10px;
  }

  h3 {
    font-family: ${styleFont};
    font-size: 15px;
    margin: 5px;
  }
  
  audio {
    border-radius: 8px;
    background-color: gray;
  }
`;
