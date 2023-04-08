import React from 'react';
import {
  ArcEditItemResults,
  ArcResultDisplay,
  ArcResultEditConfirmProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { useArcadiaEditItem } from '@/dataSource/reactQueryHooks';
import camelcaseKeys from 'camelcase-keys';

export function ArcResultEditConfirm(props: ArcResultEditConfirmProps) {
  const { itemEditPackage, onReset } = props;
  const { data, error, isLoading, isError } = useArcadiaEditItem(itemEditPackage);
  let message:string;

  if (isError && error) {
    message = `An error has occurred editing: ${itemEditPackage.data}`;
  } else if (isLoading) {
    message = `Editing Item: ${itemEditPackage.data}`;
  } else if (data) {
    const arcDeleteResult: ArcEditItemResults = camelcaseKeys<ArcEditItemResults>(
      data,
      { deep: true },
    );

    if (arcDeleteResult.updatedItem) {
      message = `Successfully Edited "${itemEditPackage.data}".  Going back the the original data in 5 seconds.  To see the newest data, please refresh this search.`;
      setTimeout(() => onReset(ArcResultDisplay.VIEW), 5000);
    } else {
      message = `There was an issue with deleting: "${itemEditPackage.data}"`;
    }
  }

  return <div>{message}</div>;
}
