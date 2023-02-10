import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';
import { LexiconSection } from '@/views/search/lexicon/styles/lexiconHomeStyles';
import { Hoverable } from '@/views/styles/appStyles';

export const SearchContainer = styled.div`
  font-size: 17px;
  margin: 0;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
  padding-top: 20px;

  @media ${device.tabletS} {
    padding-top: 0px;
  }
`;

export const TagsSection = styled(LexiconSection)``;

export const GeneralSection = styled(LexiconSection)`
  margin: 0;
  border-radius: 0;
  background-color: inherit;
  border: 0;
  box-shadow: none;
`;

export const Tag = styled(Hoverable)``;

export const LatestTagsListContainer = styled.ul`{
  all: unset;
  margin: 0 0 0 50px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  
  li {
    list-style: none
  }
}`;
