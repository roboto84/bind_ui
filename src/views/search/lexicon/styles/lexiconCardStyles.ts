import styled from 'styled-components';
import { TagsSection } from '@/views/search/arcadia/styles/arcadiaStyles';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { device } from '@/styles/responsive';

export const IconContainer = styled.div`
  font-size: 60px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const LexiconOverviewContainer = styled.div`
  width: 100%;
`;

export const LexiconConfirmSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LexiconCardExternalContainer = styled.section`
  flex-grow: 1;
  min-width: 50%;
`;

export const LexiconCardContainer = styled(TagsSection)`
  max-width: 100%;
  min-width: 100px;
  padding: 20px;
  display: flex;
  gap: 0 20px;
`;

export const GeneralDictionarySection = styled(GeneralSection)`
  padding: 5px;
`;
