import React from 'react';
import Header from '@/views/components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { LayoutWithHeaderProps } from '@/views/components/Header/types/headerTypes';
import { MainContainer } from '../styles/appStyles';

export function Layout(props: LayoutWithHeaderProps) {
  const { state } = useWh00tWebsocket();
  const { children, title, secondaryTitle, subtitle } = props;
  const pageTitle: string = title || 'Roboto';
  const newTitle: string = `${pageTitle}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  state.wh00tNotifier.setTitleCache(newTitle);
  document.title = newTitle;
  const body:React.ReactNode = children || <Outlet />;

  return (
    <>
      <Header title={pageTitle} secondaryTitle={secondaryTitle} subtitle={subtitle} />
      <MainContainer>
        {body}
      </MainContainer>
    </>
  );
}
