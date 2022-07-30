import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types/themeTypes';

export const HeaderContainer = styled.header`
  font-size: 11px;
  margin: 0 0 0 10px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px ${(props:GlobalThemeType) => props.theme.header.borderBottomColor};
  height: 65px;
  
  & a:link, a:visited {
    margin: 0;
  }

  @media ${device.tablet} {
    margin: -15px 5px 0 5px;
    height: 68px;
  }
`;

export const TitleContainer = styled.div`
`;

export const HeaderTitleContainer = styled.div`
  width: calc(100% - 375px);
  display: flex;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 10px;
  
  @media ${device.tablet} {
    font-size: 27px;
    margin: 29px 0 0 8px;
  }
`;

export const SmallHeaderIconContainer = styled.span`
  color: ${(props:GlobalThemeType) => props.theme.header.iconColor};
  display: inherit;

  &:hover {
    cursor: pointer;
    color: ${(props:GlobalThemeType) => props.theme.header.iconHoverColor};
  }
  
  @media ${device.tablet} {
    margin: 10px -7px 0px -2px;
  }
`;

export const PrimaryTitle = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;

export const ColoredTitle = styled.span`
  color: ${(props:GlobalThemeType) => props.theme.header.secondaryTitleColor};
  margin-left: 8px;
  
  @media ${device.tablet} {
    margin: -2px 0 0 8px;
  }
`;

export const TagContainer = styled.div`
  color: ${(props:GlobalThemeType) => props.theme.button.transitionFontColor};
  display: inline-block;
  height: 14px;
  margin: -8px 0 0 6px;
  transform: rotateY(0deg) rotate(-14deg);
`;

export const SubTitle = styled.div`
  color: ${(props:GlobalThemeType) => props.theme.header.subTitleColor};
  font-size: 13px;
  margin: 0 30px 10px 17px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLinksContainer = styled.nav`
  padding-top: 20px;
  padding-right: 10px;
  display: flex;
  justify-content: right;
  margin-bottom: -22px;

  @media ${device.tablet} {
    margin-bottom: -30px;
  }
  
  @media ${device.mobileXL} {
    padding: 10px 0;
    justify-content: center;
    margin-bottom: 0;
    border-bottom: solid 1px ${(props:GlobalThemeType) => props.theme.header.borderBottomColor};
  }
`;

export const NavContainer = styled.div`
  all: unset;
  display: flex;
  height: 34px;
  width: 360px;
  justify-content: space-between;

  @media ${device.mobileXL} {
    width: 250px;
    display: none;
  }
  
  li {
    list-style: none;
  }
`;

export const NavigationOptional = styled.div`
  display: flex;
  width: 30px;
  justify-content: space-between;
  
  @media ${device.mobileXL} {
    display: none;
  }
`;

export const MobileNavigationMenuContainer = styled.div`
  display: none;
  margin: 23px 5px 0 0;
  height: 39px;
  
  @media ${device.mobileXL} {
    display: inherit;
  }
`;

export const MobileNavContainer = styled.div`
  display: none;
  
  @media ${device.mobileXL} {
    display: flex;
    width: 335px;
    height: 34px;
    justify-content: space-between;
  }
`;
