import { createGlobalStyle } from 'styled-components';
import { GlobalThemeType } from '@/types';

export const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 28px;
    margin: 15px 20px 0 15px;
  }

  h2 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 20px;
    margin: 10px;
  }

  h3 {
    font-family: ${(props: GlobalThemeType) => props.theme.shared.fonts.primary};
    font-size: 15px;
    margin: 5px;
  }
  
  audio {
    border-radius: 8px;
    background-color: gray;
  }
`;
