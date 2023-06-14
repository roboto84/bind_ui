import React from 'react';
import { ArcResultDeleteQuestionProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { Button } from '@/components/Nav/Button';
import {
  ArcResultDeleteQuestionContainer,
  ArcResultDeleteMessage, ArcResultDeleteURL, ArcResultDeleteButtonContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';

export function ArcResultDeleteQuestion(props: ArcResultDeleteQuestionProps) {
  const { itemKey, onConfirm, onDeny } = props;
  const buttonFontSize = '15px';
  const buttonPadding = '5px 15px';
  const buttonMargin = '10px';
  const buttonRadius = '5px';
  return (
    <ArcResultDeleteQuestionContainer>
      <ArcResultDeleteMessage>
        Are you sure you would like to delete this entry?
      </ArcResultDeleteMessage>
      <ArcResultDeleteURL style={{ fontSize: '16px' }} href={itemKey} rel="noreferrer" target="_blank">
        {itemKey}
      </ArcResultDeleteURL>
      <ArcResultDeleteButtonContainer>
        <Button
          fontSize={buttonFontSize}
          padding={buttonPadding}
          borderRadius={buttonRadius}
          onClick={() => onDeny()}
          title="Cancel"
        >
          Cancel
        </Button>
        <Button
          fontSize={buttonFontSize}
          padding={buttonPadding}
          margin={buttonMargin}
          borderRadius={buttonRadius}
          onClick={() => onConfirm()}
          title="Yes"
        >
          Yes, Delete
        </Button>
      </ArcResultDeleteButtonContainer>
    </ArcResultDeleteQuestionContainer>
  );
}
