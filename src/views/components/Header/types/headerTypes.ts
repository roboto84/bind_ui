import React from 'react';

export type HeaderProps = {
  title: string,
  subtitle: string
}

export type HeaderTitleProps = {
  title: string,
  subtitle: string
}

export type NavigationLinkProps = {
  linkTo ?: string,
  callBack ?: CallableFunction,
  fontSize ?: string,
  padding ?: string,
  children ?: React.ReactNode
}
