import React, { useState } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { AddRecordForm } from '@/views/search/components/AddRecord/AddRecordForm/AddRecordForm';
import { AddRecordProps, ArcAddPackage } from '@/views/search/types/searchTypes';
import { ArcEditPackage } from '@/views/search/arcadia/types/arcadiaTypes';
import { AddRecordConfirm } from '@/views/search/components/AddRecord/AddRecordForm/AddRecordConfirm';
import { SearchAddRecordContainer } from '@/views/search/styles/searchStyles';
import { ArcAddContainer, ArcChangeStatusContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import { useClickOutside } from '@/hooks/useClickOutside';

export function AddRecord(props: AddRecordProps) {
  const { isAddRecordViewable, cancelAddRecordFormView } = props;
  const [confirmAdd, setConfirmAdd] = useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [addItemPackage, setAddItemPackage] = useState<ArcAddPackage>(null);
  const [isFormActive, setIsFormActive] = useState<boolean>(true);
  const queryClient: QueryClient = useQueryClient();

  const { ref } = useClickOutside(() => {
    setConfirmMessage('');
  });

  const addItem = (itemPackage: ArcEditPackage) => {
    setIsSuccess(false);
    setAddItemPackage(itemPackage);
    setIsFormActive(false);
    setConfirmAdd(true);
  };

  const resetFormAfterConfirm = (message: string, success: boolean) => {
    setConfirmMessage(message);
    setIsSuccess(success);
    setAddItemPackage(null);
    setConfirmAdd(false);
    setIsFormActive(true);

    queryClient.invalidateQueries('arcadiaWordSearch');
  };

  let body: JSX.Element;
  if (isAddRecordViewable) {
    let addRecordCall: JSX.Element = <div />;
    if (confirmAdd) {
      addRecordCall = (
        <AddRecordConfirm
          itemAddPackage={addItemPackage}
          onConfirmation={resetFormAfterConfirm}
        />
      );
    } else if (confirmMessage) {
      addRecordCall = (
        <ArcChangeStatusContainer>
          {confirmMessage}
        </ArcChangeStatusContainer>
      );
    }

    body = (
      <SearchAddRecordContainer>
        <ArcAddContainer>
          <AddRecordForm
            _ref={ref}
            cancelAddForm={cancelAddRecordFormView}
            onAddItem={addItem}
            isFormActive={isFormActive}
            isSuccess={isSuccess}
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
