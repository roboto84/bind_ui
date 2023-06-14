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
import { ArcEditThrobberContainer } from '@/views/search/arcadia/styles/arcadiaStyles';

export function ArcResultEditConfirm(props: ArcResultEditConfirmProps) {
  const { itemEditPackage, onEditConfirmed } = props;
  const { data, error, isError, isFetching } = useArcadiaEditItem(itemEditPackage);

  const editResult: ArcResultEditingPackage = {
    itemPackage: itemEditPackage,
    editingMessage: '',
  };

  if (!isFetching) {
    if (isError && error) {
      editResult.editingMessage = `An error has occurred editing: ${itemEditPackage.data}`;
      onEditConfirmed(editResult);
    } else if (data) {
      const arcDeleteResult: ArcEditItemResults = camelcaseKeys<ArcEditItemResults>(
        data,
        { deep: true },
      );

      if (arcDeleteResult.updatedItem) {
        editResult.editingMessage = 'Successfully Edited Record';
      } else {
        editResult.editingMessage = 'There was an issue with editing this record';
      }
      onEditConfirmed(editResult);
    }
  }

  return (
    <ArcEditThrobberContainer>
      <Loader size={Size.medium} />
    </ArcEditThrobberContainer>
  );
}
