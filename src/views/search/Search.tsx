import React, { useState } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { SearchBar } from '@/views/search/components/SearchBar';
import { Lexicon } from '@/views/search/lexicon/Lexicon';
import { RouterItemConfig } from '@/types';
import { DiDatabase } from 'react-icons/di';
import { TbNotebook } from 'react-icons/tb';
import { RoutesGenerator } from '@/components/Nav/RoutesGenerator';
import { Arcadia } from '@/views/search/arcadia/Arcadia';
import { ArcadiaSearch } from '@/views/search/arcadia/ArcadiaSearch';
import {
  LexiconSearchHome,
} from '@/views/search/lexicon/components/lexiconSearchDefinition/LexiconSearchHome';
import { SearchSystem } from '@/views/search/types/searchTypes';
import { SearchContainer } from './styles/searchStyles';

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();
  const { pathname } = useLocation();
  const isLexicon: boolean = (pathname.includes('lexicon'));

  const generalSearch = (url: string, value: string) => {
    if (value !== '') {
      navigate(`${url}${value}`);
    }
  };

  const arcadiaSys: SearchSystem = {
    system: 'Arcadia',
    icon: <DiDatabase />,
    onHomeClick: () => (navigate('/search')),
    onSearchKeyUp: (value: string) => {
      setSearchTerm(value);
      navigate('/search');
    },
    onSendSearch: (value: string) => (
      generalSearch('/search/system/arcadia/data?word=', encodeURIComponent(value))
    ),
  };

  const lexiconSys: SearchSystem = {
    system: 'Lexicon',
    icon: <TbNotebook />,
    onHomeClick: () => (navigate('/search')),
    onSearchKeyUp: (value: string) => { setSearchTerm(value); },
    onSendSearch: (value: string) => (
      generalSearch('/search/system/lexicon/definition?word=', encodeURIComponent(value))
    ),
  };

  const [system, setSystem] = useState<SearchSystem>(isLexicon ? lexiconSys : arcadiaSys);
  const switchSystem = () => {
    if (system.system === 'Arcadia') {
      setSystem(lexiconSys);
    } else {
      setSystem(arcadiaSys);
    }
  };

  const routerConfig: RouterItemConfig[] = [
    { index: true, element: system.system === 'Arcadia' ? <Arcadia subTag={searchTerm} /> : <Lexicon /> },
    { path: 'lexicon/definition', element: <LexiconSearchHome /> },
    { path: 'arcadia/data', element: <ArcadiaSearch /> },
  ];

  return (
    <SearchContainer>
      <SearchBar searchSystem={system} onSystemSwitch={switchSystem} />
      <RoutesGenerator routerRoutesConfig={routerConfig} />
    </SearchContainer>
  );
}
