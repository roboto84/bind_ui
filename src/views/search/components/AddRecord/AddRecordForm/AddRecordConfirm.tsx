import React from 'react';
import { useArcadiaAddItem } from '@/dataSource/reactQueryHooks';
import { AddRecordConfirmProps } from '@/views/search/types/searchTypes';
import { ArcAddThrobberContainer } from '@/views/search/arcadia/styles/arcadiaStyles';
import Loader from '@/components/Misc/Loader';
import { Size } from '@/types';
import { ArcAddItemResults } from '@/views/search/arcadia/types/arcadiaTypes';
import camelcaseKeys from 'camelcase-keys';

export function AddRecordConfirm(props: AddRecordConfirmProps) {
  const { itemAddPackage, onConfirmation } = props;
  const { data, error, isError, isFetching } = useArcadiaAddItem(itemAddPackage);
  let message:JSX.Element;
  let success:boolean = false;

  if (!isFetching) {
    if (isError && error) {
      message = <span>Error occurred adding record</span>;
      onConfirmation(message, success);
    } else if (data) {
      const recordAddResult: ArcAddItemResults = camelcaseKeys<ArcAddItemResults>(
        data,
        { deep: true },
      );

      if (recordAddResult.addedItem) {
        success = true;
        message = <span>Entry Successfully Added</span>;
      } else {
        switch (recordAddResult.reason) {
          case 'item_duplicate':
            message = <span>Record Already Exists</span>;
            break;
          case 'empty_string_tag':
            message = <span>Tags Not Specified</span>;
            break;
          default:
            message = <span>There was an issue adding record</span>;
        }
      }
      onConfirmation(message, success);
    }
  }

  return (
    <ArcAddThrobberContainer>
      <Loader size={Size.medium} />
    </ArcAddThrobberContainer>
  );
}
