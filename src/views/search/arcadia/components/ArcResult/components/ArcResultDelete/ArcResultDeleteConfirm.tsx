import React from 'react';
import {
  ArcDeleteItemResults,
  ArcResultDeleteConfirmProps,
} from '@/views/search/arcadia/types/arcadiaTypes';
import {
  ArcResultDeleteMessage,
  ArcResultDeleteConfirmContainer, ArcResultDeleteURL,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import { useArcadiaDeleteItem } from '@/dataSource/reactQueryHooks';
import camelcaseKeys from 'camelcase-keys';
import Loader from '@/components/Misc/Loader';
import { Size } from '@/types';

export function ArcResultDeleteConfirm(props: ArcResultDeleteConfirmProps) {
  const { _ref, itemKey } = props;
  const { data, error, isLoading, isError, isSuccess } = useArcadiaDeleteItem(itemKey);
  let message:string;

  if (isError && error) {
    message = 'An error has occurred deleting to remove:';
  } else if (data) {
    const arcDeleteResult: ArcDeleteItemResults = camelcaseKeys<ArcDeleteItemResults>(
      data,
      { deep: true },
    );

    if (arcDeleteResult.deletedItem) {
      message = 'Successfully Deleted:';
    } else {
      message = 'There was an issue with deleting:';
    }
  }
  if (isLoading) {
    return (
      <ArcResultDeleteConfirmContainer>
        <Loader size={Size.medium} />
      </ArcResultDeleteConfirmContainer>
    );
  }

  return (
    <ArcResultDeleteConfirmContainer ref={_ref}>
      <ArcResultDeleteMessage>
        {message}
      </ArcResultDeleteMessage>
      <ArcResultDeleteURL style={{ fontSize: '16px' }} href={itemKey} rel="noreferrer" target="_blank">
        {itemKey}
      </ArcResultDeleteURL>
    </ArcResultDeleteConfirmContainer>
  );
}
