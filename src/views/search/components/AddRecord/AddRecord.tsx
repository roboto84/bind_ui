import React, { useState } from 'react';
import { AddRecordForm } from '@/views/search/components/AddRecord/AddRecordForm/AddRecordForm';
import {
  AddRecordProps,
  ArcAddPackage,
} from '@/views/search/types/searchTypes';
import { ArcEditPackage } from '@/views/search/arcadia/types/arcadiaTypes';
import {
  AddRecordConfirm,
} from '@/views/search/components/AddRecord/AddRecordForm/AddRecordConfirm';
import { SearchAddRecordContainer } from '@/views/search/styles/searchStyles';
import { ArcResultContainer } from '@/views/search/arcadia/styles/arcadiaStyles';

export function AddRecord(props: AddRecordProps) {
  const { isAddRecordViewable, switchAddRecordView, initialTags } = props;
  const [confirmAdd, setConfirmAdd] = useState<boolean>(false);
  const [addItemPackage, setAddItemPackage] = useState<ArcAddPackage>(null);

  const addItem = (itemPackage: ArcEditPackage) => {
    setAddItemPackage(itemPackage);
    setConfirmAdd(true);
  };

  const resetFormAfterConfirm = () => {
    setAddItemPackage(null);
    setConfirmAdd(false);
  };

  let body: JSX.Element;

  if (isAddRecordViewable) {
    if (confirmAdd) {
      body = <AddRecordConfirm itemAddPackage={addItemPackage} onReset={resetFormAfterConfirm} />;
    } else {
      body = (
        <AddRecordForm
          initialTags={initialTags}
          cancelAddForm={switchAddRecordView}
          onAddItem={addItem}
        />
      );
    }

    body = (
      <SearchAddRecordContainer>
        <ArcResultContainer>
          {body}
        </ArcResultContainer>
      </SearchAddRecordContainer>
    );
  } else {
    body = (
      <div />
    );
  }

  return (body);
}
