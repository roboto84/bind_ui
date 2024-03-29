import React from 'react';
import { Button, ButtonAlert, SubButton } from '@/components/Nav/Button';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationLinkActivationType,
  NavigationLinkProps,
  NavigationLinkType,
} from '@/views/components/Header/types/headerTypes';

export type NavigationItemConfig = {
  activationKey ?: string,
  activationType ?: NavigationLinkActivationType
  borderRadius ?: string,
  linkTo: string,
  navTitle: string | JSX.Element,
  htmlTitle ?: string,
}

function NavigationLink(props: NavigationLinkProps) {
  const { activationType, activationKey, alert, navigationLinkType, linkTo, children,
    fontSize, padding, borderRadius, callBack, title } = props;
  const activeKey: string = linkTo ? activationKey || linkTo : linkTo;
  const { pathname } = useLocation();
  const navigate: NavigateFunction = useNavigate();
  let isActive: boolean = false;

  if (activationType && activationType === NavigationLinkActivationType.global) {
    isActive = activeKey && activeKey.length === 1
      ? activeKey === pathname
      : pathname.includes(activeKey);
  }
  if (activationType && activationType === NavigationLinkActivationType.local) {
    isActive = (
      activeKey && activeKey.length === 1
        ? activeKey === pathname
        : activeKey
        && pathname.substring(pathname.length - activeKey.length, pathname.length) === activeKey
    );
  }

  if (navigationLinkType === NavigationLinkType.sub) {
    return (
      <SubButton
        className={isActive && 'active'}
        fontSize={fontSize}
        padding={padding}
        borderRadius={borderRadius}
        onClick={callBack ? (() => callBack()) : (() => navigate(linkTo))}
        title={title}
      >
        {children}
      </SubButton>
    );
  }

  return (
    <Button
      className={isActive && 'active'}
      fontSize={fontSize}
      padding={padding}
      borderRadius={borderRadius}
      onClick={callBack ? (() => callBack()) : (() => navigate(linkTo))}
      title={title}
    >
      {children}
      { alert ? <ButtonAlert /> : ''}
    </Button>
  );
}

NavigationLink.defaultProps = {
  activationType: NavigationLinkActivationType.global,
  navigationLinkType: NavigationLinkType.base,
  isActive: false,
  linkTo: null,
  fontSize: 'inherit',
  padding: '0 10px',
  borderRadius: 'inherit',
  children: null,
  callBack: null,
};

export default NavigationLink;
