import {
  ArcEditPackage,
  ArcResultEditProps, ArcResultPackage,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useState } from 'react';
import {
  ArcResultEditView,
} from '@/views/search/arcadia/ArcResult/ArcResultEdit/ArcResultEditView';
import {
  ArcResultEditConfirm,
} from '@/views/search/arcadia/ArcResult/ArcResultEdit/ArcResultEditConfirm';

export function ArcResultEdit(props: ArcResultEditProps) {
  const { itemKey, tags, title, description, image, onReset } = props;
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [editItemPackage, setEditItemPackage] = useState<ArcEditPackage>();

  const editItem = (itemPackage: ArcResultPackage) => {
    setEditItemPackage(itemPackage);
    setConfirmEdit(true);
  };

  let body: JSX.Element;

  if (confirmEdit) {
    body = <ArcResultEditConfirm itemEditPackage={editItemPackage} onReset={onReset} />;
  } else {
    body = (
      <ArcResultEditView
        itemKey={itemKey}
        image={image}
        tags={tags}
        title={title}
        description={description}
        onReset={onReset}
        onEdit={editItem}
      />
    );
  }

  return (body);
}
