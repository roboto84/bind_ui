import { DebugMessageProps } from '@/views/debug/types/debugTypes';
import React from 'react';
import { MessageContainer } from '../styles/debugStyles';

export function DebugMessageContainer(props: DebugMessageProps) {
  const { message } = props;
  return (
    <MessageContainer>
      <span className="appTitle">
        <span className="messageId">{message.id}</span>
        <span> / </span>
        <span className="messageCategory">{message.category}</span>
        <time dateTime={message.time} className="messageTime">{` (${message.time}): `}</time>
      </span>
      <span className="appMessage">{message.message}</span>
    </MessageContainer>
  );
}
