import React from 'react';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';
import RobotImg from '@/views/components/RobotImg';
import { TitleContainer,
  SubTitle,
  Title,
  ColoredTitle,
  PrimaryTitle,
  SmallHeaderIconContainer,
} from './styles/headerStyles';

export default function HeaderTitle(props: HeaderProps) {
  const { title, secondaryTitle, subtitle } = props;

  return (
    <TitleContainer>
      <Title>
        <SmallHeaderIconContainer>
          <RobotImg robotType="GiRobotAntennas" fontSize="45px" opacity="0.7" />
        </SmallHeaderIconContainer>
        <PrimaryTitle>{title}{secondaryTitle ? ' | ' : ''}</PrimaryTitle>
        <ColoredTitle>{secondaryTitle || ''}</ColoredTitle>
      </Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleContainer>
  );
}
