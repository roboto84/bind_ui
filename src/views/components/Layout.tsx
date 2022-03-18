import React from 'react';
import Header from '@/views/components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useWh00tWebsocket } from '@/context/wh00tContext';
import { MainContainer } from '../styles/appStyles';

type LayoutProps = {
  headerTitle: string,
  headerSubtitle: string
}

export function Layout(props: LayoutProps) {
  const { state } = useWh00tWebsocket();
  const { headerTitle, headerSubtitle } = props;
  const newTitle: string = `Roboto | ${headerTitle}`;
  state.wh00tNotifier.setTitleCache(newTitle);
  document.title = newTitle;
  return (
    <>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
