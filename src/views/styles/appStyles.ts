import styled from 'styled-components';

export const AppContainer = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const MainContainer = styled.div`
  overflow-y: auto;
  height: calc(100vh - 50px);

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;
