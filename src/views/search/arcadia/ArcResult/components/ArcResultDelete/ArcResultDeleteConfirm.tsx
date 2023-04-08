import React from 'react';
import {
  ArcDeleteItemResults,
  ArcResultDeleteConfirmProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { ArcResultDeleteMessage } from '@/views/search/arcadia/styles/arcadiaStyles';
import { useArcadiaDeleteItem } from '@/dataSource/reactQueryHooks';
import camelcaseKeys from 'camelcase-keys';

export function ArcResultDeleteConfirm(props: ArcResultDeleteConfirmProps) {
  const { itemKey } = props;
  const { data, error, isLoading, isError } = useArcadiaDeleteItem(itemKey);
  let message:string;

  if (isError && error) {
    message = `An error has occurred deleting to remove: ${itemKey}`;
  } else if (isLoading) {
    message = `Deleting Item: ${itemKey}`;
  } else if (data) {
    const arcDeleteResult: ArcDeleteItemResults = camelcaseKeys<ArcDeleteItemResults>(
      data,
      { deep: true },
    );

    if (arcDeleteResult.deletedItem) {
      message = `Deleted: ${itemKey}`;
    } else {
      message = `There was an issue with deleting: ${itemKey}`;
    }
  }

  return <ArcResultDeleteMessage>{message}</ArcResultDeleteMessage>;
}
