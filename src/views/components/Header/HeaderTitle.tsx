import React from 'react';
import { HeaderTitleProps } from '@/views/components/Header/types/headerTypes';
import { TitleContainer, SubTitle } from './styles/headerStyles';

export default function HeaderTitle(props: HeaderTitleProps) {
  const { title, subtitle } = props;

  return (
    <TitleContainer>
      <h1>{title}</h1>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}
