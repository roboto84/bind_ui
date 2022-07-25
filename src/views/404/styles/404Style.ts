import styled from 'styled-components';

export const GenericErrorContainer = styled.div`
  padding-top: calc(10vh);
  overflow-y: auto;
  margin: auto;

  &.side-flexed {
    display: flex;
    justify-content: space-evenly;
  }
  
  &.flexed {
    display: flex;
    flex-direction: column;
  }
`;
