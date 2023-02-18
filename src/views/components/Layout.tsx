import React from 'react';
import Header from '@/views/components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { LayoutWithHeaderProps } from '@/views/components/Header/types/headerTypes';
import { Wh00t } from '@/views/wh00t/Wh00t';
import { Wh00tWindowStateEnum } from '@/context/types/enums';
import { MainContainer } from '../styles/appStyles';

export function Layout(props: LayoutWithHeaderProps) {
  const { pathname } = useLocation();
  const { state } = useWh00tWebsocket();
  const { children, title, secondaryTitle, subtitle } = props;
  const pageTitle: string = title || 'Roboto';
  const newTitle: string = `${pageTitle}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  state.wh00tNotifier.setTitleCache(newTitle);
  document.title = newTitle;
  const body:React.ReactNode = children || <Outlet />;
  let mainBodyFlexBasis = '100%';
  let sideWindow: JSX.Element = <div />;
  const isSidePanelActive = state.wh00tWindowState === Wh00tWindowStateEnum.MAX && !(pathname.includes('chat'));

  if (isSidePanelActive) {
    mainBodyFlexBasis = '70%';
    sideWindow = (
      <div style={{ flexBasis: '35%', borderLeft: '1px solid gray', marginLeft: '3px' }}>
        <Wh00t windowControls />
      </div>
    );
  }

  return (
    <>
      <Header
        title={pageTitle}
        secondaryTitle={secondaryTitle}
        subtitle={subtitle}
        sidePanelActive={isSidePanelActive}
      />
      <div style={{ display: 'flex' }}>
        <MainContainer style={{ flexBasis: mainBodyFlexBasis }}>
          {body}
        </MainContainer>
        {sideWindow}
      </div>
    </>
  );
}
