import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import { ArcResultProps, ArcResultDisplay } from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultView } from '@/views/search/arcadia/ArcResult/components/ArcResultView';
import { ArcResultDelete } from '@/views/search/arcadia/ArcResult/components/ArcResultDelete/ArcResultDelete';
import { ArcResultEdit } from '@/views/search/arcadia/ArcResult/components/ArcResultEdit/ArcResultEdit';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage } = props;
  const { data, tags, title, description, image } = arcResultPackage;
  const [display, setDisplay] = useState<string>(ArcResultDisplay.VIEW);
  let body: JSX.Element;

  if (display === ArcResultDisplay.VIEW) {
    body = (
      <ArcResultView
        arcResultPackage={arcResultPackage}
        onDelete={setDisplay}
        onEdit={setDisplay}
      />
    );
  } else if (display === ArcResultDisplay.DELETE) {
    body = <ArcResultDelete itemKey={data} onReset={setDisplay} />;
  } else if (display === ArcResultDisplay.EDIT) {
    body = (
      <ArcResultEdit
        itemKey={data}
        image={image}
        tags={tags.join(',')}
        title={title}
        description={description}
        onReset={setDisplay}
      />
    );
  }

  return (
    <ArcResultContainer>
      {body}
    </ArcResultContainer>
  );
}
