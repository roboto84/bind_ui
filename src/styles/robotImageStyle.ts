import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export interface RobotImageContainerProps extends GlobalThemeType {
  fontSize ?: string,
  opacity ?: string,
  margin ?: string,
}

export const RobotImgContainer = styled.div<RobotImageContainerProps>`
  opacity: ${(props: RobotImageContainerProps) => (props.opacity || '1')};
  font-size: ${(props: RobotImageContainerProps) => (props.fontSize || 'inherit')};
  margin: ${(props: RobotImageContainerProps) => (props.margin || 'inherit')};
`;
