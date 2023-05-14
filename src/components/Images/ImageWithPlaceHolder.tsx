import React, { useState } from 'react';

type ImagePropsType = {
  src: string,
  alt: string,
  borderRadius: string,
  maxWidth: string,
  height: string,
  placeHolderImage: JSX.Element
}

export function ImageWithPlaceHolder(props: ImagePropsType) {
  const { height, borderRadius, maxWidth, src, alt, placeHolderImage } = props;
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <div>
        {placeHolderImage}
      </div>
    );
  }

  return (
    <img
      style={{ borderRadius, maxWidth }}
      src={src}
      alt={alt}
      height={height}
      onError={() => { setIsError(true); }}
    />
  );
}
