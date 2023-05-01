import React from 'react';
import {
  ArcEditItemResults,
  ArcResultEditConfirmProps,
  ArcResultEditingPackage,
} from '@/views/search/arcadia/types/arcadiaTypes';
import { useArcadiaEditItem } from '@/dataSource/reactQueryHooks';
import camelcaseKeys from 'camelcase-keys';
import Loader from '@/components/Misc/Loader';
import { Size } from '@/types';

export function ArcResultEditConfirm(props: ArcResultEditConfirmProps) {
  const { itemEditPackage, onEditConfirmed } = props;
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
      message = 'Successfully Edited Record.';
    } else {
      message = 'There was an issue with editing this record';
    }
  }

  const editResult: ArcResultEditingPackage = {
    itemPackage: itemEditPackage,
    editingMessage: message,
  };

  setTimeout(() => onEditConfirmed(editResult), 500);

  return (
    <div>
      <Loader size={Size.small} />
    </div>
  );
}
