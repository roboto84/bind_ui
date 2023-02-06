import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import { ArcResultProps, ArcResultDisplay } from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultView } from '@/views/search/arcadia/ArcResult/ArcResultView';
import { ArcResultDelete } from '@/views/search/arcadia/ArcResult/ArcResultDelete/ArcResultDelete';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage } = props;
  const { data } = arcResultPackage;
  const [display, setDisplay] = useState<string>(ArcResultDisplay.VIEW);
  let body: JSX.Element = <ArcResultDelete onReset={setDisplay} itemKey={data} />;

  if (display === ArcResultDisplay.VIEW) {
    body = (
      <ArcResultView
        arcResultPackage={arcResultPackage}
        onDelete={setDisplay}
        onEdit={setDisplay}
      />
    );
  } else if (display === ArcResultDisplay.EDIT) {
    body = <div>gonna edit</div>;
  }

  return (
    <ArcResultContainer>
      {body}
    </ArcResultContainer>
  );
}
