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

export type Wh00tMessagesProps = {
  showBackgroundImage: boolean
}

export type Wh00tMessageTextProps = {
  messageText: string
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

export enum CssDisplay {
  flex = 'flex',
  none = 'none'
}

export type EmojiSelectorProps = {
  display: boolean,
  addTextCallback: CallableFunction
}

export interface EmojiSelectorContainerProps extends GlobalThemeType {
  display: CssDisplay
}
