export interface GlobalThemeType {
  theme: ThemeType
}

type HeaderStyleType = {
  subTitleFontColor: string,
  borderBottomColor: string,
};

type ThrobberStyleType = {
  background: string,
  foreground: string,
}

type ButtonStyleType = {
  border: string,
  fontColor: string,
  transitionFontColor: string,
  backgroundColor: string,
};

type ChartStyleType = {
  border: string,
  axisLabelFontColor: string,
  axisXFontColor: string,
  axisYFontColor: string,
  backgroundColor: string,
}

type LexiconThemeType = {
  textColor: string,
  searchBar:{
    inputFontColor: string,
    inputFontFocusColor: string,
    inputBackgroundColor: string,
    borderColor: string,
    searchButton:{
      color: string,
      background: string
    }
  }
}

type DebugThemeType = {
  messageTitleColor: string,
  messageTextColor: string,
  messageId: string,
  messageCategory: string,
  messageTime: string,
  messageHistoryBorder: string,
  messageBackgroundColor: string,
  latestMessageBorder: string,
}

type CoreStyleType = {
  mainThemeColor: string,
  bgColor: string,
  textColor: string,
  linkColor: string,
}

type AirThemeType = {
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

type Wh00tThemeType = {
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
