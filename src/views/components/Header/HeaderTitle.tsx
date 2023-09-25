import React from 'react';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';
import { NavigateFunction, useNavigate } from 'react-router-dom';
// @ts-ignore
import appLogoIcon from '@/assets/images/app_icon.webp';
import {
  TitleContainer,
  SubTitle,
  Title,
  ColoredTitle,
  PrimaryTitle,
  SmallHeaderIconContainer,
  HeaderTitleContainer,
  HeaderIcon,
} from './styles/headerStyles';

export default function HeaderTitle(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;
  const navigate: NavigateFunction = useNavigate();
  const htmlTitle: string = `${title}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  const coloredTitle: JSX.Element = <ColoredTitle>{secondaryTitle}</ColoredTitle>;

  return (
    <HeaderTitleContainer>
      <SmallHeaderIconContainer onClick={() => navigate('/')}>
        <HeaderIcon className="HeaderIcon" src={appLogoIcon} alt="Bind logo" />
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
