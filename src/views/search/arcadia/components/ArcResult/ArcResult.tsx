import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useState } from 'react';
import {
  ArcResultProps,
  ArcResultDisplay,
  ArcResultEditingPackage,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultView } from '@/views/search/arcadia/components/ArcResult/components/ArcResultView';
import { ArcResultDelete } from '@/views/search/arcadia/components/ArcResult/components/ArcResultDelete/ArcResultDelete';
import { ArcResultEdit } from '@/views/search/arcadia/components/ArcResult/components/ArcResultEdit/ArcResultEdit';
import { useClickOutside } from '@/hooks/useClickOutside';
import { arcadiaApiEndpoints } from '@/dataSource/restApis/bindRestApi';
import { QueryClient, useQueryClient } from 'react-query';

export function ArcResult(props: ArcResultProps) {
  const { arcResultPackage, navigate } = props;
  const [display, setDisplay] = useState<string>(ArcResultDisplay.VIEW);
  const [editMessage, setEditMessage] = useState<string>('');
  const queryClient: QueryClient = useQueryClient();
  let body: JSX.Element;

  const { ref: editRef } = useClickOutside(() => {
    setEditMessage('');
  });

  const invalidateArcQueries = () => {
    queryClient.invalidateQueries(arcadiaApiEndpoints.summary);
    queryClient.invalidateQueries('arcadiaWordSearch');
    // TODO: Figure out how to reload (arcadiaApiEndpoints.tagsWithCounts) query into context
  };

  const { ref: deleteRef } = useClickOutside(() => {
    invalidateArcQueries();
    setDisplay(ArcResultDisplay.VIEW);
  });

  const updateResultOnEdit = (editingPackage: ArcResultEditingPackage):void => {
    invalidateArcQueries();
    setEditMessage(editingPackage.editingMessage);
    setDisplay(ArcResultDisplay.VIEW);
  };

  if ('id' in arcResultPackage) {
    if (display === ArcResultDisplay.VIEW) {
      body = (
        <ArcResultView
          _ref={editRef}
          arcResultPackage={arcResultPackage}
          onDelete={setDisplay}
          onEdit={setDisplay}
          navigate={navigate}
          displayMessage={editMessage}
        />
      );
    } else if (display === ArcResultDisplay.DELETE) {
      body = (
        <ArcResultDelete
          _ref={deleteRef}
          itemKey={arcResultPackage.data}
          onReset={setDisplay}
        />
      );
    } else if (display === ArcResultDisplay.EDIT) {
      body = (
        <ArcResultEdit
          itemKey={arcResultPackage.data}
          image={arcResultPackage.image}
          tags={arcResultPackage.tags.join(',')}
          title={arcResultPackage.title}
          description={arcResultPackage.description}
          onReset={setDisplay}
          onEditConfirmed={updateResultOnEdit}
        />
      );
    }
  } else {
    body = <span>Entry not available</span>;
  }

  return (
    <ArcResultContainer>
      {body}
    </ArcResultContainer>
  );
}
