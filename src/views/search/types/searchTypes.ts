export type SearchSystem = {
  system: string,
  icon: JSX.Element,
  onHomeClick: CallableFunction,
  onSearchKeyUp: CallableFunction|null,
  onSendSearch: CallableFunction,
}

export type SearchBarProps = {
  searchSystem: SearchSystem,
  onSystemSwitch: CallableFunction,
}

export type ArcadiaProps = {
  subTag: string,
}
