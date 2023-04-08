import React from 'react';
import { useArcadiaAddItem } from '@/dataSource/reactQueryHooks';
import {
  ArcAddItemResults,
} from '@/views/search/arcadia/types/arcadiaTypes';
import camelcaseKeys from 'camelcase-keys';
import { AddRecordConfirmProps } from '@/views/search/types/searchTypes';

export function AddRecordConfirm(props: AddRecordConfirmProps) {
  const { itemAddPackage, onReset } = props;
  const { data, error, isLoading, isError } = useArcadiaAddItem(itemAddPackage);
  let message:string;

  if (isError && error) {
    message = `An error has occurred adding: ${itemAddPackage.data}`;
    setTimeout(() => onReset(), 5000);
  } else if (isLoading) {
    message = `Adding Item: ${itemAddPackage.data}`;
  } else if (data) {
    const recordAddResult: ArcAddItemResults = camelcaseKeys<ArcAddItemResults>(
      data,
      { deep: true },
    );

    if (recordAddResult.addedItem) {
      message = `Successfully Added "${itemAddPackage.data}".  Going back the to the input form in 5 seconds.`;
    } else {
      message = `There was an issue with adding: "${itemAddPackage.data}"`;
    }
    setTimeout(() => onReset(), 5000);
  }

  return <div>{message}</div>;
}
