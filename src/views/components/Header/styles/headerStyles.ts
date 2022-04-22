import styled from 'styled-components';
import { device } from '@/styles/responsive';
import { GlobalThemeType } from '@/types/themeTypes';

export const HeaderContainer = styled.div`
  font-size: 13px;
  margin: 0 15px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px ${(props:GlobalThemeType) => props.theme.header.borderBottomColor};
  height: 85px;
  
  & a:link, a:visited {
    margin: 0;
  }
  
  @media ${device.tablet} {
    padding-bottom: 15px;
  }
`;

export const TitleContainer = styled.div`
  justify-content: left;
  width: calc(100% - 400px);
 
  @media ${device.tablet} {
    margin-top: 5px;
  }
`;

export const Title = styled.h1``;

export const ColoredTitle = styled.span`
  color: ${(props:GlobalThemeType) => props.theme.header.secondaryTitleColor};
`;

export const SubTitle = styled.div`
  color: ${(props:GlobalThemeType) => props.theme.header.subTitleColor};
  font-size: 14px;
  margin: 0 30px 10px 40px;
  
  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLinksContainer = styled.div`
  padding-top: 23px;
  padding-right: 10px;
  display: flex;
  justify-content: right;
  
  @media ${device.mobileXL} {
    display: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 45px;
  width: 440px;
  justify-content: space-between;
`;
