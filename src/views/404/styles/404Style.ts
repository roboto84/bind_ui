import styled from 'styled-components';

export const GenericErrorContainer = styled.div`
  padding-top: calc(15vh);
  overflow-y: auto;

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
`;
