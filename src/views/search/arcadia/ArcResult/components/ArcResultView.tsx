import {
  formatUrl,
  getLocalStandardDateTime,
  imageUrlCompletion,
  substringDotted,
  urlArrowSplit,
} from '@/utils/formatting';
import {
  ArcImageContainer,
  ArcResultDescription,
  ArcResultTimeStamp,
  ArcResultTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React from 'react';
import { ArcResultViewProps, ArcResultDisplay } from '@/views/search/arcadia/types/arcadiaTypes';
import { NonListHoverable } from '@/views/styles/appStyles';
import { Button } from '@/components/Nav/Button';
import { BsFillImageFill } from 'react-icons/bs';
import { ImageWithPlaceHolder } from '@/components/Images/ImageWithPlaceHolder';

export function ArcResultView(props: ArcResultViewProps) {
  const { arcResultPackage, onEdit, onDelete, onSubTagClick } = props;
  const { timeStamp, data, tags, title, description, image } = arcResultPackage;
  const formattedTimeStamp: string = timeStamp.indexOf('Z') > -1
    ? getLocalStandardDateTime(true, timeStamp)
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
    <NonListHoverable
      style={{ fontSize: '17px' }}
      key={'resultTagListItem'.concat(tag)}
      onClick={() => onSubTagClick(tag)}
    >
      {tag}
    </NonListHoverable>
  ));
  if (tagsView.length > 0) {
    tagsView.push(<span key="resultTagListEnd"> | </span>);
  }

  return (
    <>
      <ArcImageContainer>
        {resultImage}
      </ArcImageContainer>
      <div style={isImageValid ? { paddingLeft: '20px' } : {}}>
        <div>
          <ArcResultTitle>{title === 'None' ? 'No title' : title}</ArcResultTitle>
          <span> | </span>
          {tagsView}
          <ArcResultTimeStamp>{formattedTimeStamp}</ArcResultTimeStamp>
          <span> | </span>
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
    </>
  );
}