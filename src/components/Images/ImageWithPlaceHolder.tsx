import React, { useState } from 'react';

type ImagePropsType = {
  src: string,
  alt: string,
  borderRadius: string,
  maxWidth: string,
  height: string,
  placeHolderImage: JSX.Element,
  lazyLoad: boolean
}

enum ImgLoadType {
  LAZY = 'lazy',
  EAGER = 'eager',
}

export function ImageWithPlaceHolder(props: ImagePropsType) {
  const { height, borderRadius, maxWidth, src, alt, placeHolderImage, lazyLoad } = props;
  const [isError, setIsError] = useState(false);
  const imgLoadingStrategy: ImgLoadType = lazyLoad ? ImgLoadType.LAZY : ImgLoadType.EAGER;

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
      loading={imgLoadingStrategy}
      src={src}
      alt={alt}
      height={height}
      onError={() => { setIsError(true); }}
    />
  );
}
