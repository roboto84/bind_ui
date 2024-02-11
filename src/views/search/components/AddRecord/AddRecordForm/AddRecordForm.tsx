import {
  ArcRecordFormContainer,
  ArcAddFieldContainer,
  ArcAddInputContainer,
  ArcInput,
  ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useRef, useEffect, useContext, FormEventHandler } from 'react';
import { Button } from '@/components/Nav/Button';
import { AddRecordFormProps, ArcAddPackage } from '@/views/search/types/searchTypes';
import { SearchContext } from '@/context/searchContext';
import MultiTextInputWithAutocomplete from '@/components/Input/MultiTextInputWithAutocomplete';

export function AddRecordForm(props: AddRecordFormProps) {
  const { state } = useContext(SearchContext);
  const { _ref, cancelAddForm, onAddItem, isFormActive, isSuccess } = props;
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    if (isSuccess) {
      urlInputRef.current.value = '';
      urlInputRef.current.focus();
    }
  }, [isSuccess]);

  const addItem = () => {
    if (urlInputRef.current.value !== '') {
      const tagsFromInput: string = tagsInputRef.current.value.endsWith(',')
        ? tagsInputRef.current.value.substring(0, tagsInputRef.current.value.length - 1)
        : tagsInputRef.current.value;

      const addItemPackage: ArcAddPackage = {
        data: urlInputRef.current.value,
        tags: String(tagsFromInput).replace(/\s+/g, '').split(','),
      };
      onAddItem(addItemPackage);
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
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
        <MultiTextInputWithAutocomplete
          label="Tags (comma separated)"
          title="Tags Edit"
          isInputActive={isFormActive}
          autocompleteOptions={state.tags}
          inputRef={tagsInputRef}
          isForcedLowercase
        />
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
