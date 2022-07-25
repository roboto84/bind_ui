import React from 'react';
import {
  LatestMessage,
  MessageHistory,
  DebugHomeContainer,
  DebugSectionContainer,
} from '@/views/debug/styles/debugStyles';
import { useQuery } from 'react-query';
import { Loader } from '@/components/Misc/Loader';
import { ErrorView } from '@/components/Error/ErrorView';
import { DebugMessage, DebugApiResponse } from '@/dataSource/types/apiTypes';
import { debugApiEndpoints } from '@/dataSource/restApis/robotoRestApi';
import { DebugMessageContainer } from './components/DebugMessage';

export function Debug() {
  const { isLoading, isError, data, error } = useQuery<DebugApiResponse,
    Error>(debugApiEndpoints.wh00tMessages);
  if (isLoading) {
    return (
      <DebugHomeContainer>
        <Loader />
      </DebugHomeContainer>
    );
  }
  if (isError) {
    return (
      <DebugHomeContainer>
        <ErrorView title="Data Error">
          <div>What is the error?</div>
          <div>{error}</div>
        </ErrorView>
      </DebugHomeContainer>
    );
  }

  if (data.message.length === 0) {
    return (
      <DebugHomeContainer>
        <ErrorView title="Lack of Data">
          <div>There are currently no messages to track.</div>
        </ErrorView>
      </DebugHomeContainer>
    );
  }
  return (
    <DebugHomeContainer>
      <DebugSectionContainer>
        <h2>Latest Message</h2>
        <LatestMessage>
          <DebugMessageContainer message={data.message[0]} />
        </LatestMessage>
      </DebugSectionContainer>
      <DebugSectionContainer>
        <h2>Message History</h2>
        <MessageHistory>
          {
            data.message.filter((message:DebugMessage, index:number) => index > 0)
              .map((message: DebugMessage, index:number) => (
                <DebugMessageContainer
                  message={message}
                  key={'message'.concat(message.time, String(index))}
                />
              ))
          }
        </MessageHistory>
      </DebugSectionContainer>
    </DebugHomeContainer>
  );
}
