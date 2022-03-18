import { Wh00tMessagePackage } from '@/context/types/wh00tContextTypes';
import { GlobalThemeType } from '@/types';

type HeaderButtons = {
  maximize: boolean,
  minimize: boolean,
  disconnect: boolean,
}

export type Wh00tBaseUserImageProps = {
  currentClientId: string,
  username: string,
  imageSrc?: string
}

export type Wh00tMessageProps = {
  currentClientId: string,
  messagePackage: Wh00tMessagePackage
}

export enum ElementSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE'
}
export type Wh00tChatHeaderProps = {
  headerButtons: HeaderButtons,
  headerSize: ElementSize,
  minimizeSwitch?: Function
}

export interface Wh00tChatHeaderContainerProps extends GlobalThemeType {
  margin ?: string,
  borderRadius?: string
}
