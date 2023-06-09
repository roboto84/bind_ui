import {
  ArcRecordFormContainer, ArcAddFieldContainer, ArcAddInputContainer,
  ArcInput, ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/Nav/Button';
import { AddRecordFormProps, ArcAddPackage } from '@/views/search/types/searchTypes';

export function AddRecordForm(props: AddRecordFormProps) {
  const { _ref, cancelAddForm, onAddItem, isFormActive, isSuccess } = props;
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    if (isSuccess) {
      urlInputRef.current.value = '';
      tagsInputRef.current.value = '';
      urlInputRef.current.focus();
    }
  }, [isSuccess]);

  const addItem = () => {
    if (urlInputRef.current.value !== '') {
      const addItemPackage: ArcAddPackage = {
        data: urlInputRef.current.value,
        tags: String(tagsInputRef.current.value).replace(/\s+/g, '').split(','),
      };
      onAddItem(addItemPackage);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    addItem();
  };

  return (
    <ArcRecordFormContainer show={isFormActive} onSubmit={handleSubmit}>
      <ArcAddFieldContainer>
        <ArcAddInputContainer>
          <ArcInputTitle>URL</ArcInputTitle>
          <ArcInput
            title="URL Edit"
            type="text"
            ref={urlInputRef}
            disabled={!isFormActive}
          />
        </ArcAddInputContainer>
        <ArcAddInputContainer>
          <ArcInputTitle>Tags (comma separated)</ArcInputTitle>
          <ArcInput
            title="Tags Edit"
            type="text"
            ref={tagsInputRef}
            disabled={!isFormActive}
          />
        </ArcAddInputContainer>
      </ArcAddFieldContainer>
      <ArcAddFieldContainer style={{ marginTop: '20px', justifyContent: 'end' }}>
        <div>
          <Button
            type="submit"
            ref={_ref}
            fontSize="14px"
            padding="8px"
            width="74px"
            margin="0 0 15px 0"
            borderRadius="5px"
            title="Add"
            disabled={!isFormActive}
          >
            Add
          </Button>
        </div>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            width="74px"
            borderRadius="5px"
            onClick={() => cancelAddForm()}
            title="Cancel"
          >
            Cancel
          </Button>
        </div>
      </ArcAddFieldContainer>
    </ArcRecordFormContainer>
  );
}
