import { Wh00tExtendedMessagePackage } from '@/context/types/wh00tContextTypes';
import { GlobalThemeType } from '@/types';
import { Wh00tMessageTypeEnum } from '@/context/types/enums';

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
  messagePackage: Wh00tExtendedMessagePackage
}

export type Wh00tMessagesProps = {
  showBackgroundImage: boolean
}

export type Wh00tMessageTextProps = {
  username: string,
  messageSource: Wh00tMessageTypeEnum,
  messageText: string
}

export enum ElementSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE'
}

export type Wh00tProps = {
  windowControls: boolean
}

export type Wh00tChatHeaderProps = {
  headerButtons: HeaderButtons,
  headerSize: ElementSize,
  windowSwitch?: CallableFunction
}

export interface Wh00tChatHeaderContainerProps extends GlobalThemeType {
  margin ?: string,
  borderRadius?: string
}

export interface TextMessageContainerProps extends GlobalThemeType {
  filterBlur: boolean
  highlightMessage: boolean
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
