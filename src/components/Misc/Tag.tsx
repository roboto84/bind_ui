import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

type TagProps = {
  title: string
}

const TagStyle = styled.span`
  border: 0;
  background-color: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
  border-radius: 4px;
  width: 100%;
  display: inline-block;
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 4px;
`;

// TODO - allow different sizes
export function Tag(props: TagProps) {
  const { title } = props;
  return (
    <TagStyle>
      {title}
    </TagStyle>
  );
}
