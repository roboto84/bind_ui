import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const Wh00tContainer = styled.section`
  height: calc(100vh - 65px);
`;

export const Wh00tBackground = styled.div`
  background-image: url(${(props: GlobalThemeType) => props.theme.wh00t.backgroundImage});
  background-repeat: no-repeat;
  height: 420px;
  width: 425px;
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 60px;
`;
