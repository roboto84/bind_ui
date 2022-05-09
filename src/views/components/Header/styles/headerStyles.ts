import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types/themeTypes';

export const HeaderContainer = styled.div`
  font-size: 12px;
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px ${(props:GlobalThemeType) => props.theme.header.borderBottomColor};
  height: 80px;
  
  & a:link, a:visited {
    margin: 0;
  }

  @media ${device.tabletS} {
    margin: 0 5px;
  }
`;

export const TitleContainer = styled.div`
  justify-content: left;
  width: calc(100% - 400px);
 
  @media ${device.tabletS} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  @media ${device.tabletS} {
    font-size: 22px;
    margin: 27px 0 0 15px;
  }
`;

export const ColoredTitle = styled.span`
  color: ${(props:GlobalThemeType) => props.theme.header.secondaryTitleColor};
`;

export const SubTitle = styled.div`
  color: ${(props:GlobalThemeType) => props.theme.header.subTitleColor};
  font-size: 13px;
  margin: 0 30px 10px 17px;

  @media ${device.tabletS} {
    display: none;
  }
`;

export const NavLinksContainer = styled.div`
  padding-top: 22px;
  padding-right: 10px;
  display: flex;
  justify-content: right;

  @media ${device.tabletS} {
    padding-right: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 40px;
  width: 395px;
  justify-content: space-between;

  @media ${device.tabletS} {
    width: 250px;
  }
`;

export const NavigationOptional = styled.div`
  display: flex;
  width: 137px;
  justify-content: space-between;
  
  @media ${device.tabletS} {
    display: none;
  }
`;
