import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';
import { LexiconSection } from '@/views/search/lexicon/styles/lexiconHomeStyles';
import { Hoverable } from '@/views/styles/appStyles';

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
  margin: 0 auto 20px;
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
  padding: 0;
  width: 100%;
`;

export const TagGroupSection = styled(GeneralSection)`
  width: 100%;
`;

export const Tag = styled(Hoverable)``;

export const LatestTagsListContainer = styled.ul`{
  all: unset;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  gap: 10px;

  li {
    list-style: none
  }

  h1 {
    margin-bottom: 8px;
  }
}`;

export const TagIndexListContainer = styled(LatestTagsListContainer)`
  max-height: 100%;
  overflow: auto;
  justify-content: left;
`;
