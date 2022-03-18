import styled from 'styled-components';

export const GenericErrorContainer = styled.div`
  height: calc(100vh - 50px);
  padding-top: calc(15vh);
  overflow-y: auto;

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;
