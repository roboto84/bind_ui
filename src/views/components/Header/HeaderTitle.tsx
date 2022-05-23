import React from 'react';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';
import RobotImg from '@/components/Images/RobotImg';
import { TitleContainer,
  SubTitle,
  Title,
  ColoredTitle,
  PrimaryTitle,
  SmallHeaderIconContainer,
} from './styles/headerStyles';

export default function HeaderTitle(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;
  const htmlTitle: string = `${title}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  return (
    <TitleContainer>
      <Title title={htmlTitle}>
        <SmallHeaderIconContainer>
          <RobotImg fontSize="45px" opacity="0.7" />
        </SmallHeaderIconContainer>
        <PrimaryTitle>{title}{secondaryTitle ? ' | ' : ''}</PrimaryTitle>
        <ColoredTitle>{secondaryTitle || ''}</ColoredTitle>
      </Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}
