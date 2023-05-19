import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ArcadiaProps, ArcadiaView } from '@/views/search/types/searchTypes';
import ArcadiaSearchHome from '@/views/search/arcadia/components/ArcadiaSearchHome';
import { ArcadiaTagIndex } from '@/views/search/arcadia/components/ArcadiaTagIndex/ArcadiaTagIndex';
import { ArcadiaContainer } from './styles/arcadiaStyles';

export function Arcadia(props: ArcadiaProps) {
  const { view, searchTerm, setContext } = props;
  const navigate: NavigateFunction = useNavigate();
  const onTagClick = (term: string) => {
    setContext(term);
    navigate(`/search/system/arcadia/data?word=${term}`);
  };

  let viewBody: JSX.Element;
  if (view === ArcadiaView.INDEX) {
    viewBody = <ArcadiaTagIndex searchTerm={searchTerm} onTagClick={onTagClick} />;
  } else {
    viewBody = (
      <ArcadiaSearchHome
        tagSearchTerm={searchTerm}
        onTagClick={onTagClick}
      />
    );
  }

  return (
    <ArcadiaContainer>
      {viewBody}
    </ArcadiaContainer>
  );
}
