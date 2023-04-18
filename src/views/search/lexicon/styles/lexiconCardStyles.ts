import styled from 'styled-components';
import { SimilarResultsSection } from '@/views/search/arcadia/styles/arcadiaStyles';
import { GeneralSection } from '@/views/search/styles/searchStyles';
import { device } from '@/styles/responsive';

export const IconContainer = styled.div`
  font-size: 60px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const LexiconOverviewContainer = styled.div``;

export const LexiconConfirmSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LexiconCardContainer = styled(SimilarResultsSection)`
  max-width: 100%;
  min-width: 100px;
  padding: 20px;
  display: flex;
  gap: 0 20px;
`;

export const GeneralDictionarySection = styled(GeneralSection)`
  padding: 5px;
`;
