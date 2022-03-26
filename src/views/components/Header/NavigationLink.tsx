import React from 'react';
import { Button } from '@/components/Button';
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { NavigationLinkProps } from '@/views/components/Header/types/headerTypes';

function NavigationLink(props: NavigationLinkProps) {
  const { linkTo, children, fontSize, padding, callBack } = props;
  const { pathname } = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const isActive = (): boolean => (
    linkTo && linkTo.length === 1 ? linkTo === pathname : pathname.includes(linkTo)
  );
  return (
    <Button
      className={isActive() && 'active'}
      fontSize={fontSize}
      padding={padding}
      onClick={callBack ? (() => callBack()) : (() => navigate(linkTo))}
    >
      {children}
    </Button>
  );
}

NavigationLink.defaultProps = {
  isActive: false,
  linkTo: null,
  fontSize: 'inherit',
  padding: '10px',
  children: null,
  callBack: null,
};

export default NavigationLink;
