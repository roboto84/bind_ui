import React from 'react';
import { Button, SubButton } from '@/components/Button';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationLinkActivationType,
  NavigationLinkProps,
  NavigationLinkType,
} from '@/views/components/Header/types/headerTypes';

function NavigationLink(props: NavigationLinkProps) {
  const { activationType, navigationLinkType, linkTo, children,
    fontSize, padding, borderRadius, callBack } = props;
  const { pathname } = useLocation();
  const navigate: NavigateFunction = useNavigate();
  let isActive: boolean = false;

  if (activationType === NavigationLinkActivationType.global) {
    isActive = linkTo && linkTo.length === 1 ? linkTo === pathname : pathname.includes(linkTo);
  }
  if (activationType === NavigationLinkActivationType.local) {
    isActive = (
      linkTo && linkTo.length === 1
        ? linkTo === pathname
        : linkTo && pathname.substring(pathname.length - linkTo.length, pathname.length) === linkTo
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
    >
      {children}
    </Button>
  );
}

NavigationLink.defaultProps = {
  activationType: NavigationLinkActivationType.global,
  navigationLinkType: NavigationLinkType.base,
  isActive: false,
  linkTo: null,
  fontSize: 'inherit',
  padding: '10px',
  borderRadius: 'inherit',
  children: null,
  callBack: null,
};

export default NavigationLink;
