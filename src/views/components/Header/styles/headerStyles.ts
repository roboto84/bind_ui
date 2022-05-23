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
    margin: -15px 5px 0 5px;
    height: 68px;
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
    display: flex;
    font-size: 27px;
    margin: 29px 0 0 8px;
  }
`;

export const SmallHeaderIconContainer = styled.span`
  display: none;
  
  @media ${device.tabletS} {
    display: inherit;
    margin: -6px 9px 0 0;
  }
`;

export const PrimaryTitle = styled.span`
  @media ${device.tabletS} {
    display: none;
  }
`;

export const ColoredTitle = styled.span`
  color: ${(props:GlobalThemeType) => props.theme.header.secondaryTitleColor};
  
  @media ${device.tabletS} {
    margin: -2px 0 0 -4px;
  }
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
  margin-bottom: -22px;

  @media ${device.tabletS} {
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
  display: flex;
  height: 40px;
  width: 395px;
  justify-content: space-between;

  @media ${device.mobileXL} {
    width: 250px;
    display: none;
  }
`;

export const NavigationOptional = styled.div`
  display: flex;
  width: 43px;
  justify-content: space-between;
  
  @media ${device.mobileXL} {
    display: none;
  }
`;

export const MobileNavigationMenuContainer = styled.div`
  display: none;
  margin-top: 20px;
  height: 42px;
  
  @media ${device.mobileXL} {
    display: inherit;
  }
`;

export const MobileNavContainer = styled.div`
  display: none;
  
  @media ${device.mobileXL} {
    display: flex;
    width: 350px;
    justify-content: space-between;
  }
`;
