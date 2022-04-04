import React from 'react';
import { HeaderTitleProps } from '@/views/components/Header/types/headerTypes';
import { TitleContainer, SubTitle, Title } from './styles/headerStyles';

export default function HeaderTitle(props: HeaderTitleProps) {
  const { title, subtitle } = props;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}
