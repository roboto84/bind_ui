import {
  formatUrl,
  getLocalStandardDateTime,
  imageUrlCompletion,
  substringDotted,
  urlArrowSplit,
} from '@/utils/formatting';
import {
  ArcResultContainer,
  ArcResultDescription,
  ArcResultTimeStamp,
  ArcResultTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcResultProps } from '@/views/search/arcadia/types/arcadiaTypes';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage } = props;
  const { timeStamp, data, title, description, image } = arcResultPackage;
  const formattedTimeStamp = timeStamp.indexOf('Z') > -1
    ? getLocalStandardDateTime(true, timeStamp)
    : timeStamp;
  return (
    <ArcResultContainer>
      <div style={{ margin: 'auto 0' }}>
        <img
          style={{ borderRadius: '5px' }}
          height="75"
          src={imageUrlCompletion(data, image)}
          alt="image"
        />
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <div key={'mainNodeUrl'.concat(timeStamp)}>
          <ArcResultTitle>{title === 'None' ? 'No title' : title}</ArcResultTitle>
          <span> | </span>
          <ArcResultTimeStamp>{formattedTimeStamp}</ArcResultTimeStamp>
        </div>
        <div>
          <a style={{ fontSize: '16px' }} href={data} rel="noreferrer" target="_blank">
            {substringDotted(urlArrowSplit(formatUrl(data)), 100)}
          </a>
        </div>
        <ArcResultDescription>
          <span>{description === 'None' ? 'No description' : description}...</span>
        </ArcResultDescription>
      </div>
    </ArcResultContainer>
  );
}
