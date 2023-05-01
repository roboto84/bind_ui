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
import {
  ArcAddContainer,
  ArcChangeStatusContainer,
} from '@/views/search/arcadia/styles/arcadiaStyles';

export function AddRecord(props: AddRecordProps) {
  const { isAddRecordViewable, cancelAddRecordFormView } = props;
  const [confirmAdd, setConfirmAdd] = useState<boolean>(false);
  const [addItemPackage, setAddItemPackage] = useState<ArcAddPackage>(null);
  const [isFormActive, setIsFormActive] = useState<boolean>(true);

  const addItem = (itemPackage: ArcEditPackage) => {
    setAddItemPackage(itemPackage);
    setIsFormActive(false);
    setConfirmAdd(true);
  };

  const resetFormAfterConfirm = () => {
    setAddItemPackage(null);
    setConfirmAdd(false);
    setIsFormActive(true);
  };

  let body: JSX.Element;
  if (isAddRecordViewable) {
    let addRecordCall: JSX.Element = <div />;
    if (confirmAdd) {
      addRecordCall = (
        <ArcChangeStatusContainer>
          <AddRecordConfirm
            itemAddPackage={addItemPackage}
            onConfirmation={resetFormAfterConfirm}
          />
        </ArcChangeStatusContainer>
      );
    }

    body = (
      <SearchAddRecordContainer>
        <ArcAddContainer>
          <AddRecordForm
            cancelAddForm={cancelAddRecordFormView}
            onAddItem={addItem}
            isFormActive={isFormActive}
          />
          {addRecordCall}
        </ArcAddContainer>
      </SearchAddRecordContainer>
    );
  } else {
    body = <div />;
  }

  return (body);
}
