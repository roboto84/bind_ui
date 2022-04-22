import React from 'react';
import Header from '@/views/components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { HeaderProps } from '@/views/components/Header/types/headerTypes';
import { MainContainer } from '../styles/appStyles';

export function Layout(props: HeaderProps) {
  const { state } = useWh00tWebsocket();
  const { title, secondaryTitle, subtitle } = props;
  const pageTitle: string = title || 'Roboto';
  const newTitle: string = `${pageTitle}${secondaryTitle ? ' | ' : ''}${secondaryTitle || ''}`;
  state.wh00tNotifier.setTitleCache(newTitle);
  document.title = newTitle;
  return (
    <>
      <Header title={pageTitle} secondaryTitle={secondaryTitle} subtitle={subtitle} />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
