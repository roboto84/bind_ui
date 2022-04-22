import React from 'react';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';
import { TitleContainer, SubTitle, Title, ColoredTitle } from './styles/headerStyles';

export default function HeaderTitle(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;

  return (
    <TitleContainer>
      <Title>
        <span>{title}{secondaryTitle ? ' | ' : ''}</span>
        <ColoredTitle>{secondaryTitle || ''}</ColoredTitle>
      </Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}
