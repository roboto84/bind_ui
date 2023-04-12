import {
  ArcEditFieldContainer,
  ArcInput,
  ArcInputTitle,
} from '@/views/search/arcadia/styles/arcadiaStyles';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/Nav/Button';
import { AddRecordFormProps, ArcAddPackage } from '@/views/search/types/searchTypes';

export function AddRecordForm(props: AddRecordFormProps) {
  const [formTags, setFormTags] = useState<string>('');
  const { cancelAddForm, onAddItem, possibleTag } = props;
  const urlInputRef: React.MutableRefObject<any> = useRef();
  const tagsInputRef: React.MutableRefObject<any> = useRef();

  const defaultTagGenerator = (tag: string) => {
    if (formTags) {
      setFormTags(`${formTags},${tag}`);
    } else {
      setFormTags(tag);
    }
  };

  const addItem = () => {
    const addItemPackage: ArcAddPackage = {
      data: urlInputRef.current.value,
      tags: String(tagsInputRef.current.value).replace(/\s+/g, '').split(','),
    };
    onAddItem(addItemPackage);
  };

  if (possibleTag && (!formTags || formTags.indexOf(possibleTag) === -1)) {
    defaultTagGenerator(possibleTag);
  }

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
            defaultValue={formTags}
          />
        </div>
      </ArcEditFieldContainer>
      <ArcEditFieldContainer style={{ width: '10%', marginTop: '20px' }}>
        <div>
          <Button
            fontSize="14px"
            padding="8px"
            width="74px"
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
            width="74px"
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