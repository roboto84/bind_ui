import { BsPlusLg } from 'react-icons/bs';
import React from 'react';
import { Button } from '@/components/Nav/Button';

type AddSearchRecordButtonProps = {
  switchAddFormView: CallableFunction
}

export function AddSearchRecordButton(props: AddSearchRecordButtonProps) {
  const { switchAddFormView } = props;
  return (
    <div style={{ margin: '7px 0px 0px 8px' }}>
      <Button
        title="Add Record"
        borderRadius="100%"
        padding="9px 11px 8px 11px"
        onClick={() => switchAddFormView()}
      >
        <BsPlusLg />
      </Button>
    </div>
  );
}
