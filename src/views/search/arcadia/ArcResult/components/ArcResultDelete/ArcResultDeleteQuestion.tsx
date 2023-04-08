import React from 'react';
import { ArcResultDeleteQuestionProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { Button } from '@/components/Nav/Button';
import {
  ArcResultDeleteQuestionContainer,
  ArcResultDeleteMessage,
} from '@/views/search/arcadia/styles/arcadiaStyles';

export function ArcResultDeleteQuestion(props: ArcResultDeleteQuestionProps) {
  const { onConfirm, onDeny } = props;
  const buttonFontSize = '18px';
  const buttonPadding = '8px';
  const buttonMargin = '10px';
  const buttonRadius = '5px';
  return (
    <ArcResultDeleteQuestionContainer>
      <ArcResultDeleteMessage>
        Are you sure you would like to delete this item?
      </ArcResultDeleteMessage>
      <div style={{ marginTop: '5px' }}>
        <Button
          fontSize={buttonFontSize}
          padding={buttonPadding}
          margin={buttonMargin}
          borderRadius={buttonRadius}
          onClick={() => onConfirm()}
          title="Affirm"
        >
          Yes
        </Button>
        <Button
          fontSize={buttonFontSize}
          padding={buttonPadding}
          borderRadius={buttonRadius}
          onClick={() => onDeny()}
          title="Deny"
        >
          No
        </Button>
      </div>
    </ArcResultDeleteQuestionContainer>
  );
}
