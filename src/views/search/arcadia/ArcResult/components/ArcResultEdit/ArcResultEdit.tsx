import {
  ArcEditPackage,
  ArcResultEditProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import React, { useState } from 'react';
import {
  ArcResultEditForm,
} from '@/views/search/arcadia/ArcResult/components/ArcResultEdit/ArcResultEditForm';
import {
  ArcResultEditConfirm,
} from '@/views/search/arcadia/ArcResult/components/ArcResultEdit/ArcResultEditConfirm';

export function ArcResultEdit(props: ArcResultEditProps) {
  const { itemKey, tags, title, description, image, onReset } = props;
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  const [editItemPackage, setEditItemPackage] = useState<ArcEditPackage>();

  const editItem = (itemPackage: ArcEditPackage) => {
    setEditItemPackage(itemPackage);
    setConfirmEdit(true);
  };

  let body: JSX.Element;

  if (confirmEdit) {
    body = <ArcResultEditConfirm itemEditPackage={editItemPackage} onReset={onReset} />;
  } else {
    body = (
      <ArcResultEditForm
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
