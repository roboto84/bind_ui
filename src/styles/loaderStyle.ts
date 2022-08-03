import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

interface LoaderContainerProps extends GlobalThemeType {
  padding ?: string,
  margin ?: string,
}

export const LoaderContainer = styled.div<LoaderContainerProps>`
  display: table;
  margin: ${(props: LoaderContainerProps) => (props.margin ? props.margin : 'inherit')};
  padding: ${(props: LoaderContainerProps) => (props.padding ? props.padding : 'inherit')};
`;
