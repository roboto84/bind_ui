import {
  formatUrl,
  getLocalStandardDateTime,
  imageUrlCompletion,
  substringDotted,
  urlArrowSplit,
} from '@/utils/formatting';
import {
  ArcImageContainer,
  ArcResultContainer,
  ArcResultDescription,
  ArcResultTimeStamp,
  ArcResultTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcResultProps } from '@/views/search/arcadia/types/arcadiaTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { NonListHoverable } from '@/views/styles/appStyles';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage } = props;
  const { timeStamp, data, tags, title, description, image } = arcResultPackage;
  const navigate: NavigateFunction = useNavigate();
  const formattedTimeStamp: string = timeStamp.indexOf('Z') > -1
    ? getLocalStandardDateTime(true, timeStamp)
    : timeStamp;

  const isImageValid = image !== 'None';
  const resultImage: JSX.Element = isImageValid
    ? (
      <img
        style={{ borderRadius: '5px' }}
        height="75"
        src={imageUrlCompletion(data, image)}
        alt="image"
      />
    )
    : <div />;
  const tagsView = tags.map((tag: string) => (
    <NonListHoverable
      style={{ fontSize: '17px' }}
      key={'resultTagListItem'.concat(tag)}
      onClick={() => navigate(`/search/system/arcadia/data?word=${tag}`)}
    >
      {tag}
    </NonListHoverable>
  ));
  if (tagsView.length > 0) {
    tagsView.push(<span> | </span>);
  }

  return (
    <ArcResultContainer>
      <ArcImageContainer style={{ margin: 'auto 0' }}>
        {resultImage}
      </ArcImageContainer>
      <div style={isImageValid ? { paddingLeft: '20px' } : {}}>
        <div key={'mainNodeUrl'.concat(timeStamp)}>
          <ArcResultTitle>{title === 'None' ? 'No title' : title}</ArcResultTitle>
          <span> | </span>
          {tagsView}
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
