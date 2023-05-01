import {
  formatUrl,
  getLocalStandardDateTime,
  imageUrlCompletion,
  substringDotted,
  urlArrowSplit,
} from '@/utils/formatting';
import {
  ArcImageContainer,
  ArcResultChangeStatusContainer,
  ArcResultDescription,
  ArcResultFirstLine,
  ArcResultTextContainer,
  ArcResultTimeStamp,
  ArcResultTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcResultViewProps, ArcResultDisplay } from '@/views/search/arcadia/types/arcadiaTypes';
import { Pill, PillContainer } from '@/views/styles/appStyles';
import { Button } from '@/components/Nav/Button';
import { BsFillImageFill } from 'react-icons/bs';
import { ImageWithPlaceHolder } from '@/components/Images/ImageWithPlaceHolder';

export function ArcResultView(props: ArcResultViewProps) {
  const { arcResultPackage, onEdit, onDelete, onSubTagClick, displayMessage } = props;
  const { timeStamp, data, tags, title, description, image } = arcResultPackage;
  const formattedTimeStamp: string = timeStamp.indexOf('Z') > -1
    ? getLocalStandardDateTime(true, timeStamp, true)
    : timeStamp;

  const isImageValid = image !== 'None';
  const resultImage: JSX.Element = isImageValid
    ? (
      <ImageWithPlaceHolder
        borderRadius="5px"
        maxWidth="175px"
        height="75"
        src={imageUrlCompletion(data, image)}
        alt="img"
        placeHolderImage={<BsFillImageFill style={{ fontSize: '60px' }} />}
      />
    )
    : <div />;

  const tagsView = tags.map((tag: string) => (
    <Pill key={'resultTagListItem'.concat(tag)} onClick={() => onSubTagClick(tag)}>
      {tag}
    </Pill>
  ));

  const descriptionView: JSX.Element = description !== 'None'
    ? <ArcResultDescription><span>{`${description}`}</span></ArcResultDescription>
    : <div />;

  const changeMessage: JSX.Element = displayMessage !== ''
    ? <ArcResultChangeStatusContainer>{displayMessage}</ArcResultChangeStatusContainer>
    : <div />;

  return (
    <>
      <ArcImageContainer>
        {resultImage}
      </ArcImageContainer>
      <ArcResultTextContainer style={isImageValid ? { paddingLeft: '20px' } : {}}>
        <ArcResultFirstLine>
          <span>
            <ArcResultTitle>{title === 'None' ? 'No title' : title}</ArcResultTitle>
            <span> | </span>
            <ArcResultTimeStamp>{formattedTimeStamp}</ArcResultTimeStamp>
          </span>
          <span>
            <span style={{ display: 'flex' }}>
              <Button
                fontSize="12px"
                letterSpacing="2px"
                padding="1px 5px"
                margin="3px"
                borderRadius="5px"
                onClick={() => onEdit(ArcResultDisplay.EDIT)}
                title="Edit Item"
              >
                edit
              </Button>
              <Button
                fontSize="12px"
                letterSpacing="2px"
                padding="1px 5px"
                margin="3px"
                borderRadius="5px"
                onClick={() => onDelete(ArcResultDisplay.DELETE)}
                title="Delete Item"
              >
                delete
              </Button>
            </span>
          </span>
        </ArcResultFirstLine>
        <div>
          <a style={{ fontSize: '16px' }} href={data} rel="noreferrer" target="_blank">
            {substringDotted(urlArrowSplit(formatUrl(data)), 100)}
          </a>
        </div>
        {descriptionView}
        <PillContainer>
          {tagsView}
        </PillContainer>
        {changeMessage}
      </ArcResultTextContainer>
    </>
  );
}