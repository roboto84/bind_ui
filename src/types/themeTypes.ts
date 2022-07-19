export interface GlobalThemeType {
  theme: ThemeType
}

export type HomeThemeType = {
  robotoDescription: {
    borderColor: string,
    backgroundColor: string,
  },
  appDescription: {
    titleColor: string,
    fontColor: string,
    borderColor: string,
    backgroundColor: string,
  }
};

export type HeaderStyleType = {
  iconColor: string,
  iconHoverColor: string,
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

export type SubButtonStyleType = {
  backgroundColor: string,
  fontColor: string,
  transitionFontColor: string,
  borderColor: string,
}

export type ChartStyleType = {
  border: string,
  axisLabelFontColor: string,
  axisXFontColor: string,
  axisYFontColor: string,
  backgroundColor: string,
}

export type LexiconThemeType = {
  textColor: string,
  secondaryTextColor: string,
  ternaryTextColor: string,
  searchBar:{
    inputFontColor: string,
    inputFontFocusColor: string,
    inputBackgroundColor: string,
    inputBackgroundFocusColor: string,
    borderColor: string,
    borderFocusColor: string,
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
  aLink: {
    linkColor: string,
    hoverColor: string,
  },
  section: {
    backgroundColor: string,
    borderColor: string,
  },
  table: {
    borderColor: string,
    headerColor: string,
    highlightCellColor: string,
  },
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
      backgroundHoverColor: string,
    },
    backgroundColor: string,
    borderColor: string,
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
    imageBorderColor: string,
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
  subButton: SubButtonStyleType,
  chart: ChartStyleType,
  header: HeaderStyleType,
  home: HomeThemeType,
  air: AirThemeType,
  lexicon: LexiconThemeType,
  wh00t: Wh00tThemeType,
  debug: DebugThemeType
}
