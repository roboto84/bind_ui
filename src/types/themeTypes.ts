export interface GlobalThemeType {
  theme: ThemeType
}

export type HeaderStyleType = {
  subTitleColor: string,
  secondaryTitleColor: string,
  borderBottomColor: string,
};

export type ThrobberStyleType = {
  background: string,
  foreground: string,
}

export type ButtonStyleType = {
  border: string,
  fontColor: string,
  transitionFontColor: string,
  backgroundColor: string,
};

export type ChartStyleType = {
  border: string,
  axisLabelFontColor: string,
  axisXFontColor: string,
  axisYFontColor: string,
  backgroundColor: string,
}

export type LexiconThemeType = {
  textColor: string,
  containerBackgroundColor: string,
  searchBar:{
    inputFontColor: string,
    inputFontFocusColor: string,
    inputBackgroundColor: string,
    inputBackgroundFocusColor: string,
    borderColor: string,
    searchButton:{
      color: string,
      background: string
    }
  }
}

export type DebugThemeType = {
  messageTitleColor: string,
  messageTextColor: string,
  messageId: string,
  messageCategory: string,
  messageTime: string,
  messageHistoryBorder: string,
  messageBackgroundColor: string,
  latestMessageBorder: string,
}

export type CoreStyleType = {
  mainThemeColor: string,
  bgColor: string,
  textColor: string,
  linkColor: string,
  code: {
    backgroundColor: string,
    borderColor: string,
    textColor: string
  }
}

export type AirThemeType = {
  weatherSubcategory: {
    fontColor: string,
    borderColor: string,
    backgroundColor: string,
  },
  weatherTable:{
    evenCellsBackgroundColor: string,
    cellBorderColor: string
  }
}

export type Wh00tThemeType = {
  backgroundImage: string,
  miniWh00t: {
    minimizedButton: {
      color: string,
      borderColor: string,
      backgroundColor: string,
    },
    backgroundColor: string,
    inputColor: string,
  },
  largeWh00t: {
  },
  messages: {
    backgroundColor: string,
    otherUsernamesColor: string,
    usernameColor: string,
    botUsernameColor: string,
    timeColor: string,
    messageText: string,
    usernameBaseImageBackgroundColor: string,
    otherUsernameBaseImageBackgroundColor: string,
    aLinkColor: string,
  },
  chatInput: {
    button: {
      backgroundColor: string,
      color: string,
    },
    textInput: {
      borderColor: string,
      backgroundColor: string,
      focusBackgroundColor: string,
      focusFontColor: string,
    },
    emoji: {
      borderColor: string,
    }
  },
  chatHeader: {
    backgroundColor: string,
    titleColor: string,
    titleHighlightColor: string,
  }
  connect: {
    labelDescription: string,
  }
}

export type ThemeType = {
  core: CoreStyleType
  throbber: ThrobberStyleType,
  button: ButtonStyleType,
  chart: ChartStyleType,
  header: HeaderStyleType,
  air: AirThemeType,
  lexicon: LexiconThemeType,
  wh00t: Wh00tThemeType,
  debug: DebugThemeType
}
