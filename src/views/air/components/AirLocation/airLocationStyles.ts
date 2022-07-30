import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { device } from '@/styles/responsive';

interface AirLocationContainerProps extends GlobalThemeType {
  fontSize ?: string,
  padding ?: string,
  borderRadius ?: string,
  margin ?: string,
}

export const AirLocationContainer = styled.div<AirLocationContainerProps>`
  margin: ${(props:AirLocationContainerProps) => (props.margin || '0')};;
  border: 2px solid ${(props:AirLocationContainerProps) => props.theme.button.border};
  padding: ${(props:AirLocationContainerProps) => (props.padding || '7px')};
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 5px;
  transition: 0.4s;
  font-size: ${(props:AirLocationContainerProps) => (props.fontSize || 'inherit')};
  font-weight: 600;
  background-color: ${(props: AirLocationContainerProps) => props.theme.button.backgroundColor};
  border-radius: ${(props:AirLocationContainerProps) => (props.borderRadius || 'inherit')};
  color: ${(props: AirLocationContainerProps) => props.theme.subButton.fontColor};
  background-color: ${(props: AirLocationContainerProps) => props.theme.subButton.backgroundColor};
  border-color: ${(props: AirLocationContainerProps) => props.theme.subButton.borderColor};

  @media ${device.tabletS} {
    margin: 0 0 0 5px;
  }
`;
