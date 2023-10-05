import React from 'react';
import { ArcadiaProps, ArcadiaView } from '@/views/search/types/searchTypes';
import { ArcadiaSearchHome } from '@/views/search/arcadia/components/ArcadiaSearchHome';
import { ArcadiaTagIndex } from '@/views/search/arcadia/components/ArcadiaTagIndex/ArcadiaTagIndex';
import { ArcadiaContainer } from './styles/arcadiaStyles';

export function Arcadia(props: ArcadiaProps) {
  const { view, searchTerm } = props;
  const navLocation: string = '/search/system/arcadia/data?word=';

  let viewBody: JSX.Element;
  if (view === ArcadiaView.INDEX) {
    viewBody = <ArcadiaTagIndex searchTerm={searchTerm} navigate={navLocation} />;
  } else {
    viewBody = <ArcadiaSearchHome navigate={navLocation} />;
  }

  return (
    <ArcadiaContainer>
      {viewBody}
    </ArcadiaContainer>
  );
}
