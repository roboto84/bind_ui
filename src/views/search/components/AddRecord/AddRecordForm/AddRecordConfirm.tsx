import React from 'react';
import { useArcadiaAddItem } from '@/dataSource/reactQueryHooks';
import { AddRecordConfirmProps } from '@/views/search/types/searchTypes';
import Loader from '@/components/Misc/Loader';
import { Size } from '@/types';
import { ArcAddItemResults } from '@/views/search/arcadia/types/arcadiaTypes';
import camelcaseKeys from 'camelcase-keys';

export function AddRecordConfirm(props: AddRecordConfirmProps) {
  const { itemAddPackage, onConfirmation } = props;
  const { data, error, isLoading, isError } = useArcadiaAddItem(itemAddPackage);
  let message:JSX.Element;

  if (isError && error) {
    message = <span>Error occurred adding record</span>;
  } else if (isLoading) {
    message = <Loader size={Size.small} />;
  } else if (data) {
    const recordAddResult: ArcAddItemResults = camelcaseKeys<ArcAddItemResults>(
      data,
      { deep: true },
    );

    if (recordAddResult.addedItem) {
      message = <span>Record Successfully Added</span>;
    } else {
      message = <span>There was an issue adding record</span>;
    }
    setTimeout(() => onConfirmation(), 3000);
  }

  return <div>{message}</div>;
}
