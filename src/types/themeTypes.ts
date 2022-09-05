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
  secondaryTitleBrightness: string,
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
  alertColor: string,
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
  tooltip: {
    borderColor: string,
    bgColor: string,
    timeBgColor: string,
    timeColor: string,
    valueBgColor: string,
    valueColor: string,
  }
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
  latestMessageBorder: string,
}

export type CoreStyleType = {
  mainThemeColor: string,
  bgColor: string,
  textColor: string,
  basicShadow: string,
  aLink: {
    linkColor: string,
  },
  section: {
    backgroundColor: string,
    borderColor: string,
  },
  table: {
    backgroundColor: string,
    borderColor: string,
    headerColor: string,
    highlightCellBackgroundColor: string,
    highlightCellColor: string,
    td: {
      borderColor: string,
    },
    tr: {
      color: string,
      evenCellsBackgroundColor: string,
    }
  },
  code: {
    backgroundColor: string,
    borderColor: string,
    textColor: string
  }
}

export type AirThemeType = {
  weatherTemperatureApparentColor: string,
  weatherTitle: {
    color: string,
    borderColor: string,
  },
  weatherSubcategory: {
    fontColor: string,
    borderColor: string,
    backgroundColor: string,
  },
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
    messageHoverColor: string,
    usernameBaseImageBackgroundColor: string,
    otherUsernameBaseImageBackgroundColor: string,
    aLink: {
      Color: string,
      hoverColor: string,
    }
    imageBorderColor: string,
    imageShadow: string,
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
    buttonColor: string,
  }
}

export type SharedThemeType = {
  fonts: {
    primary: string
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
  debug: DebugThemeType,
  shared: SharedThemeType,
}
