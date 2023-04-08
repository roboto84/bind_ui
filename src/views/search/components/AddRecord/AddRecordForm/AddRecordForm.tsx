import {
  ArcEditFieldContainer,
  ArcInput,
  ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useRef } from 'react';
import { Button } from '@/components/Nav/Button';
import { AddRecordFormProps, ArcAddPackage } from '@/views/search/types/searchTypes';

export function AddRecordForm(props: AddRecordFormProps) {
  const { cancelAddForm, onAddItem } = props;
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();
  const addItem = () => {
    const addItemPackage: ArcAddPackage = {
      data: urlInputRef.current.value,
      tags: String(tagsInputRef.current.value).replace(/\s+/g, '').split(','),
    };
    onAddItem(addItemPackage);
  };

  return (
    <>
      <ArcEditFieldContainer style={{ margin: 'auto 0', width: '85%' }}>
        <div style={{ marginTop: '10px' }}>
          <ArcInputTitle>URL</ArcInputTitle>
          <ArcInput
            title="URL Edit"
            type="text"
            ref={urlInputRef}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <ArcInputTitle>Tags (comma seperated)</ArcInputTitle>
          <ArcInput
            title="Tags Edit"
            type="text"
            ref={tagsInputRef}
          />
        </div>
      </ArcEditFieldContainer>
      <ArcEditFieldContainer style={{ paddingLeft: '20px', width: '10%', marginTop: '20px' }}>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            margin="0 0 15px 0"
            borderRadius="5px"
            onClick={() => addItem()}
            title="Add"
          >
            Add
          </Button>
        </div>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            borderRadius="5px"
            onClick={() => cancelAddForm()}
            title="Cancel"
          >
            Cancel
          </Button>
        </div>
      </ArcEditFieldContainer>
    </>
  );
}
