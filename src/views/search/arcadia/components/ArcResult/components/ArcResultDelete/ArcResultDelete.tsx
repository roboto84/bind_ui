import React, { useState } from 'react';
import {
  ArcResultDeleteProps,
  ArcResultDisplay,
} from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcResultDeleteQuestion,
} from '@/views/search/arcadia/components/ArcResult/components/ArcResultDelete/ArcResultDeleteQuestion';
import {
  ArcResultDeleteConfirm,
} from '@/views/search/arcadia/components/ArcResult/components/ArcResultDelete/ArcResultDeleteConfirm';

export function ArcResultDelete(props: ArcResultDeleteProps) {
  const { _ref, itemKey, onReset } = props;
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const deleteItem = () => {
    setConfirmDelete(true);
  };

  const resetDeleteView = () => {
    onReset(ArcResultDisplay.VIEW);
  };

  let body: JSX.Element;
  if (confirmDelete) {
    body = (
      <ArcResultDeleteConfirm
        _ref={_ref}
        itemKey={itemKey}
      />
    );
  } else {
    body = (
      <ArcResultDeleteQuestion
        itemKey={itemKey}
        onConfirm={deleteItem}
        onDeny={resetDeleteView}
      />
    );
  }

  return body;
}
