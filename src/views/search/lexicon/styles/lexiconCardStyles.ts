import styled from 'styled-components';
import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
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
  max-height: 170px;
  overflow: auto;
`;

export const LexiconConfirmSearchContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const LexiconCardExternalContainer = styled.section`
  width: 100%;
`;

export const LexiconCardContainer = styled(ArcResultContainer)`
  font-size: 16px;
  max-width: 100%;
  min-width: 100px;
  padding: 10px 8px 10px 20px;
  gap: 0 8px;
  flex-direction: row;
`;

export const GeneralDictionarySection = styled(GeneralSection)`
  padding: 5px;
`;
