import React from 'react';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';

import Icon from '@/components/Images/Icon';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Tag } from '@/components/Misc/Tag';
import {
  TitleContainer,
  SubTitle,
  Title,
  ColoredTitle,
  PrimaryTitle,
  SmallHeaderIconContainer, TagContainer, HeaderTitleContainer,
} from './styles/headerStyles';

export default function HeaderTitle(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;
  const navigate: NavigateFunction = useNavigate();
  const htmlTitle: string = `${title}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  const coloredTitle: JSX.Element = <ColoredTitle>{secondaryTitle}</ColoredTitle>;

  return (
    <HeaderTitleContainer>
      <SmallHeaderIconContainer onClick={() => navigate('/')}>
        <Icon margin="5px 0px 0px 5px" fontSize="48px" />
      </SmallHeaderIconContainer>
      <TitleContainer>
        <Title title={htmlTitle}>
          <PrimaryTitle>{title}{secondaryTitle ? ' | ' : ''}</PrimaryTitle>
          { secondaryTitle ? coloredTitle : ''}
          {/* <TagContainer>
            <Tag title="DEMO" />
          </TagContainer> */}
        </Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
    </HeaderTitleContainer>
  );
}
