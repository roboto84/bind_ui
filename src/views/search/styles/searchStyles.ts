import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';
import { LexiconSection } from '@/views/search/lexicon/styles/lexiconHomeStyles';
import { Hoverable } from '@/views/styles/appStyles';
import { TagGroupSectionProps } from '@/views/search/arcadia/types/arcadiaTypes';

export const SearchMainContainer = styled.div`
  font-size: 17px;
  margin: 0;
  color: ${(props:GlobalThemeType) => props.theme.lexicon.textColor};
  padding-top: 20px;

  @media ${device.tabletS} {
    padding-top: 0;
  }
`;

export const SearchMenuContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 98%;
`;

export const SearchAddRecordContainer = styled.div`
  max-width: 660px;
  min-width: 100px;
  margin: auto;
`;

export const TagsSection = styled(LexiconSection)``;

export const GeneralSection = styled(LexiconSection)`
  margin: 0;
  border-radius: 0;
  background-color: inherit;
  border: 0;
  box-shadow: none;
`;

export const TagGroupSection = styled(GeneralSection)`
  flex-grow: 1;
  min-width: 400px;
`;

export const Tag = styled(Hoverable)``;

export const LatestTagsListContainer = styled.ul`{
  all: unset;
  margin: 0 0 0 30px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  
  li {
    list-style: none
  }
}`;
