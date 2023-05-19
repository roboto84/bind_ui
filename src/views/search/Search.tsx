import React, { useState } from 'react';
import { NavigateFunction, useNavigate, useLocation } from 'react-router-dom';
import { SearchBar } from '@/views/search/components/SearchBar';
import { RouterItemConfig } from '@/types';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { Arcadia } from '@/views/search/arcadia/Arcadia';
import { ArcadiaSearch } from '@/views/search/arcadia/components/ArcadiaSearch';
import {
  LexiconSearchHome,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { ArcadiaView, SearchSystem } from '@/views/search/types/searchTypes';
import { AddSearchRecordButton } from '@/views/search/components/AddSearchRecordButton';
import { AddRecord } from '@/views/search/components/AddRecord/AddRecord';
import { openInNewTab, quickSearchSystems } from '@/views/search/arcadia/utils';
import { SearchMainContainer, SearchMenuContainer } from './styles/searchStyles';

export function Search() {
  const [searchContext, setSearchContext] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();
  const { pathname } = useLocation();
  const [isAddRecordViewable, setIsAddRecordViewable] = useState<boolean>(false);

  const activateAddRecordFormView = () => {
    setIsAddRecordViewable(true);
  };

  const hideAddRecordFormView = () => {
    setIsAddRecordViewable(false);
  };

  const generalSearch = (url: string, generalSearchTerm: string) => {
    if (generalSearchTerm !== '') {
      let quickSearchUrl: string;
      Object.keys(quickSearchSystems).forEach((key: string) => {
        const quickSearchKey = `!${key}`;
        if (generalSearchTerm.indexOf(quickSearchKey) > -1) {
          quickSearchUrl = quickSearchSystems[key](
            generalSearchTerm.replace(quickSearchKey, ''),
          );
        }
      });

      if (quickSearchUrl) {
        openInNewTab(quickSearchUrl);
      } else {
        navigate(`${url}${generalSearchTerm}`);
      }
    }
  };

  const arcadiaSys: SearchSystem = {
    system: 'Arcadia',
    onHomeClick: () => {
      navigate('/search');
      setSearchContext('');
    },
    onSearchKeyUp: (value: string) => {
      setSearchTerm(value);
      if (pathname !== '/search' && pathname !== '/search/system/arcadia/index') {
        navigate('/search');
      }
    },
    onSendSearch: (value: string) => {
      setSearchContext(value);
      generalSearch('/search/system/arcadia/data?word=', encodeURIComponent(value));
    },
  };

  const routerConfig: RouterItemConfig[] = [
    {
      index: true,
      element: (
        <Arcadia view={ArcadiaView.MAIN} searchTerm={searchTerm} setContext={setSearchContext} />
      ),
    },
    {
      path: 'arcadia/index',
      element: (
        <Arcadia view={ArcadiaView.INDEX} searchTerm={searchTerm} setContext={setSearchContext} />
      ),
    },
    { path: 'lexicon/definition', element: <LexiconSearchHome /> },
    { path: 'arcadia/data', element: <ArcadiaSearch setContext={setSearchContext} /> },
  ];

  return (
    <SearchMainContainer>
      <SearchMenuContainer>
        <SearchBar searchSystem={arcadiaSys} />
        <AddSearchRecordButton activateAction={activateAddRecordFormView} />
      </SearchMenuContainer>
      <AddRecord
        isAddRecordViewable={isAddRecordViewable}
        cancelAddRecordFormView={hideAddRecordFormView}
      />
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </SearchMainContainer>
  );
}
