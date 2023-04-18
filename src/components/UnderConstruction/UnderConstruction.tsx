import React from 'react';
import styled from 'styled-components';

type UnderConstructionProps = {
  reason ?: string
}

export const UnderConstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function UnderConstruction(props: UnderConstructionProps) {
  const { reason } = props;

  return (
    <UnderConstructionContainer>
      <h1>
        🚧 Under Construction 🚧
      </h1>
      <p style={{ marginLeft: '15px' }}>
        Sorry about that, this component is under construction... {reason}
      </p>
    </UnderConstructionContainer>
  );
}

UnderConstruction.defaultProps = {
  reason: '',
};

export default UnderConstruction;
