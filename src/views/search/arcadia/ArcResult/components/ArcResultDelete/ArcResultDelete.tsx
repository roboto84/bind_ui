import React, { useState } from 'react';
import {
  ArcResultDeleteProps,
  ArcResultDisplay,
} from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcResultDeleteQuestion,
} from '@/views/search/arcadia/ArcResult/components/ArcResultDelete/ArcResultDeleteQuestion';
import {
  ArcResultDeleteConfirm,
} from '@/views/search/arcadia/ArcResult/components/ArcResultDelete/ArcResultDeleteConfirm';

export function ArcResultDelete(props: ArcResultDeleteProps) {
  const { itemKey, onReset } = props;
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const deleteItem = () => {
    setConfirmDelete(true);
  };

  const resetDeleteView = () => {
    onReset(ArcResultDisplay.VIEW);
  };

  let body: JSX.Element;
  if (confirmDelete) {
    body = <ArcResultDeleteConfirm itemKey={itemKey} />;
  } else {
    body = <ArcResultDeleteQuestion onConfirm={deleteItem} onDeny={resetDeleteView} />;
  }

  return (
    <div>
      {body}
    </div>
  );
}
